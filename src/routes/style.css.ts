import { Context } from "hono"
import css from "~/public/style.css"

export const style = (ctx: Context) => {
  ctx.header("content-type", "text/css")
  ctx.header("cache-control", "public, max-age=604800, immutable")
  return ctx.body(css)
}
