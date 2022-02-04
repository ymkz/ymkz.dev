import { Context } from "hono"
import icon from "~/public/icon512.png"

export const icon512 = (ctx: Context) => {
  ctx.header("content-type", "image/png")
  ctx.header("cache-control", "public, max-age=604800, immutable")
  return ctx.body(icon.buffer.slice(0))
}
