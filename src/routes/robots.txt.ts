import { Context } from 'hono'
import txt from '~/public/robots.txt'

export const robots = (ctx: Context<never>) => {
  ctx.header('content-type', 'text/plain')
  return ctx.body(txt)
}
