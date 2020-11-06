export type ContentShape = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  title: string
  eyecatch?: { url: string }
  body: string
}

export type APIResponseAll = {
  contents: ContentShape[]
}

export type APIResponseOne = ContentShape
