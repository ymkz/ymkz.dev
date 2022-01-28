import { Context } from "hono"
import webmanifest from "~/public/site.webmanifest"

export const getWebmanifest = (ctx: Context) => {
  ctx.header("content-type", "application/manifest+json")
  return ctx.body(webmanifest)
}
