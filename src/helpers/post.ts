import { APIResponseAll, APIResponseOne } from '~/types'

const endpoint = 'https://ymkz.microcms.io/api/v1/posts'

export async function fetchPostAll() {
  const options: RequestInit = { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
  const response = await fetch(endpoint, options)
  const json: APIResponseAll = await response.json()
  return json
}

export async function fetchPostOne(slug: string | string[] | undefined, draftKey?: string | string[]) {
  const url = `${endpoint}/${slug}?draftKey=${draftKey}`
  const options: RequestInit = { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
  const response = await fetch(url, options)
  const json: APIResponseOne = await response.json()
  return { content: json }
}
