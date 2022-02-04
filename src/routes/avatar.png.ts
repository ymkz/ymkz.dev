import { Context } from "hono"
import icon from "~/public/avatar.png"

export const avatar = (ctx: Context) => {
  ctx.header("content-type", "image/png")
  return ctx.body(icon.buffer.slice(0))
}
