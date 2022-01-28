import { Context } from "hono"
import icon192 from "~/public/icon_x192.png"

export const getIcon192 = (ctx: Context) => {
  ctx.header("content-type", "image/png")
  return ctx.body(Uint8Array.from(atob(icon192), (_) => _.charCodeAt(0)))
}
