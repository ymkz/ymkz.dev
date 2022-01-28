import { Context } from "hono"
import appleTouchIcon from "~/public/apple-touch-icon.png"

export const getAppleTouchIcon = (ctx: Context) => {
  ctx.header("content-type", "image/png")
  return ctx.body(Uint8Array.from(atob(appleTouchIcon), (_) => _.charCodeAt(0)))
}
