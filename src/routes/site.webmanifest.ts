import { Context } from "hono"
import manifest from "~/public/site.webmanifest"

export const webmanifest = (ctx: Context) => {
  ctx.header("content-type", "application/manifest+json")
  return ctx.body(manifest)
}
