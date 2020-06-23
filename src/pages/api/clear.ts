import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, response: NextApiResponse): void => {
  response.clearPreviewData()
  response.writeHead(307, { Location: '/' })
  response.end()
}
