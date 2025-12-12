# ymkz.dev

## Tasks

- clean

```sh { name=clean }
find . -name '.wrangler' -type d -prune -exec rm -rf '{}' +
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name 'pnpm-lock.yaml' -type f -prune -exec rm -rf '{}' +
```
