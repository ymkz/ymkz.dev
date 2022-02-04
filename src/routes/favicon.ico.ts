import { Context } from "hono"
import icon from "~/public/favicon.ico"

export const favicon = (ctx: Context) => {
  ctx.header("content-type", "image/x-icon")
  const a = new Uint8Array()
  return ctx.body(icon.buffer.slice(0))
}
