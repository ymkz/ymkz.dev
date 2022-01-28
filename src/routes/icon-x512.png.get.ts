import { Context } from "hono"
import icon512 from "~/public/icon_x512.png"

export const getIcon512 = (ctx: Context) => {
  ctx.header("content-type", "image/png")
  return ctx.body(Uint8Array.from(atob(icon512), (_) => _.charCodeAt(0)))
}
