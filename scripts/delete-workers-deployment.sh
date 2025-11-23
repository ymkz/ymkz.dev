#!/bin/bash
set -euo pipefail

# Delete old Cloudflare Pages/Workers deployments
# https://gagor.pro/2025/08/purge-old-cloudflare-pages-deployments/

if [ -z "$CLOUDFLARE_ACCOUNT_ID" ] || [ -z "$CLOUDFLARE_WORKER_ID" ] || [ -z "$CLOUDFLARE_API_TOKEN" ]; then
  echo "Error: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_WORKER_ID, and CLOUDFLARE_API_TOKEN must be set."
  exit 1
fi

ACCOUNT_ID="$CLOUDFLARE_ACCOUNT_ID"
WORKER_ID="$CLOUDFLARE_WORKER_ID"
API_TOKEN="$CLOUDFLARE_API_TOKEN"
API_URL="https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/workers/workers/$WORKER_ID/versions"

cutoff=$(date -u -d '7 days ago' +"%Y-%m-%dT%H:%M:%SZ")
echo "Cutoff date: $cutoff"

per_page=20
response=$(curl -s -H "Authorization: Bearer $API_TOKEN" "$API_URL?page=1&per_page=$per_page")

if ! total_count=$(echo "$response" | jq -e '.result_info.total_count'); then
  echo "Error: Failed to fetch total count. Response:"
  echo "$response"
  exit 1
fi
total_pages=$(( (total_count + per_page - 1) / per_page ))
echo "Total pages: $total_pages"

page=$total_pages
while [ "$page" -ge 1 ]; do
  echo "Processing page: $page"
  response=$(curl -s -H "Authorization: Bearer $API_TOKEN" "$API_URL?page=$page&per_page=$per_page")
  
  echo "$response" | jq -c '.result[] | {id: .id, created_on: .created_on}' | while read -r version; do
    version_id=$(echo "$version" | jq -r '.id')
    created_at=$(echo "$version" | jq -r '.created_on')
    if [[ "$created_at" < "$cutoff" ]]; then
      echo "Deleting deployment $version_id from $created_at"
      curl -s -X DELETE -H "Authorization: Bearer $API_TOKEN" "$API_URL/$version_id"
    else
      echo "Skipping deployment $version_id from $created_at (newer than cutoff)"
    fi
  done
  page=$((page-1))
done
