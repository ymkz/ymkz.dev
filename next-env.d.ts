/// <reference types="next" />
/// <reference types="next/types/global" />

type Content = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  slug: string
  title: string
  eyecatch: { url: string }
  body: string
}

type Contents = {
  contents: Content[]
}
