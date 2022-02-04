import { Context } from "hono"
import icon from "~/public/avatar.png"

export const avatar = (ctx: Context) => {
  ctx.header("content-type", "image/png")
  ctx.header("cache-control", "public, max-age=604800, immutable")
  return ctx.body(icon.buffer.slice(0))
}
