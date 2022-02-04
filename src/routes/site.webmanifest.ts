import { Context } from "hono"
import manifest from "~/public/site.webmanifest"

export const webmanifest = (ctx: Context) => {
  ctx.header("content-type", "application/manifest+json")
  ctx.header("cache-control", "public, max-age=604800, immutable")
  return ctx.body(manifest)
}
