import { Context } from "hono"
import icon from "~/public/favicon.ico"

export const favicon = (ctx: Context) => {
  ctx.header("content-type", "image/x-icon")
  ctx.header("cache-control", "public, max-age=604800, immutable")
  return ctx.body(icon.buffer.slice(0))
}