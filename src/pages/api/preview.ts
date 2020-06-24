import { NextApiRequest, NextApiResponse } from 'next'

const preview = async (request: NextApiRequest, response: NextApiResponse): Promise<void> => {
  if (!request.query.id) {
    return response.status(404).end()
  }

  const endpoint: RequestInfo = `https://ymkz.microcms.io/api/v1/post/${request.query.id}?draftKey=${request.query.draftKey}`
  const options: RequestInit = { headers: { 'X-API-KEY': process.env.API_KEY || '' } }

  const result = await fetch(endpoint, options)
  const content = await result.json()

  if (!content) {
    return response.status(401).json({ message: 'Invalid id' })
  }

  response.setPreviewData({ slug: content.slug, draftKey: request.query.draftKey })
  response.writeHead(307, { Location: `/post/${content.slug}` })
  response.end('Preview mode enabled')
}

export default preview
