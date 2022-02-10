import { Context } from "hono"
import manifest from "~/public/site.webmanifest"

export const webmanifest = (ctx: Context) => {
  ctx.header("content-type", "application/manifest+json")
  ctx.header(
    "cache-control",
    "private, max-age=86400, stale-while-revalidate=604800"
  )
  return ctx.body(manifest)
}
