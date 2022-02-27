import { Context } from 'hono'
import icon from '~/public/favicon.ico'

export const favicon = (ctx: Context) => {
  ctx.header('content-type', 'image/x-icon')
  ctx.header(
    'cache-control',
    'private, max-age=86400, stale-while-revalidate=604800'
  )
  return ctx.body(icon.buffer.slice(0))
}
