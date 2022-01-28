import { Context } from "hono"
import avatar from "~/public/avatar.png"

export const getAvatar = (ctx: Context) => {
  ctx.header("content-type", "image/png")
  return ctx.body(Uint8Array.from(atob(avatar), (_) => _.charCodeAt(0)))
}
