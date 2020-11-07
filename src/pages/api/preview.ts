import { NextApiRequest, NextApiResponse } from 'next'
import { fetchPostOne } from '~/helpers/post'

async function preview(request: NextApiRequest, response: NextApiResponse) {
  if (!request.query.id) {
    return response.status(404).end()
  }

  const { content } = await fetchPostOne(request.query.id, request.query.draftKey)

  if (!content) {
    return response.status(401).json({ message: 'Invalid ContentID' })
  }

  response.setPreviewData({ slug: content.id, draftKey: request.query.draftKey })
  response.writeHead(307, { Location: `/post/${content.id}` })
  response.end()
}

export default preview
