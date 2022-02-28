import { Context } from 'hono'
import css from '~/public/style.css'

export const style = (ctx: Context<never>) => {
  ctx.header('content-type', 'text/css')
  ctx.header(
    'cache-control',
    'private, max-age=86400, stale-while-revalidate=604800'
  )
  return ctx.body(css)
}
