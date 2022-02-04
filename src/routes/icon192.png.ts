import { Context } from "hono"
import icon from "~/public/icon192.png"

export const icon192 = (ctx: Context) => {
  ctx.header("content-type", "image/png")
  return ctx.body(icon.buffer.slice(0))
}
