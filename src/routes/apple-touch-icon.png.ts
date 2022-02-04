import { Context } from "hono"
import icon from "~/public/apple-touch-icon.png"

export const appleTouchIcon = (ctx: Context) => {
  ctx.header("content-type", "image/png")
  return ctx.body(icon.buffer.slice(0))
}
