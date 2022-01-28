import { Context } from "hono"
import robots from "~/public/robots.txt"

export const getRobots = (ctx: Context) => {
  ctx.header("content-type", "text/plain")
  return ctx.body(robots)
}
