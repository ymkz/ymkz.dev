import { Context } from 'hono'
import icon from '~/public/avatar.png'

export const avatar = (ctx: Context<never>) => {
  ctx.header('content-type', 'image/png')
  ctx.header(
    'cache-control',
    'private, max-age=86400, stale-while-revalidate=604800'
  )
  return ctx.body(icon.buffer.slice(0))
}
