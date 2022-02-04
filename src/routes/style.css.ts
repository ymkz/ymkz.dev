import { Context } from "hono"
import css from "~/public/style.css"

export const style = (ctx: Context) => {
  ctx.header("content-type", "text/css")
  return ctx.body(css)
}
