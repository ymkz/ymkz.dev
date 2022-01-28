import { Context } from "hono"
import favicon from "~/public/favicon.ico"

export const getFavicon = (ctx: Context) => {
  ctx.header("content-type", "image/x-icon")
  return ctx.body(Uint8Array.from(atob(favicon), (_) => _.charCodeAt(0)))
}
