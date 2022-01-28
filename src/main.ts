import { Env, Hono } from "hono"
import { getAppleTouchIcon } from "~/routes/apple-touch-icon.png.get"
import { getAvatar } from "~/routes/avatar.png.get"
import { getFavicon } from "~/routes/favicon.ico.get"
import { getIcon192 } from "~/routes/icon-x192.png.get"
import { getIcon512 } from "~/routes/icon-x512.png.get"
import { getIndexPage } from "~/routes/index.get"
import { getRobots } from "~/routes/robots.txt.get"
import { getWebmanifest } from "~/routes/site.webmanifest.get"

const app = new Hono()

app.get("/", getIndexPage)
app.get("/apple-touch-icon.png", getAppleTouchIcon)
app.get("/avatar.png", getAvatar)
app.get("/favicon.ico", getFavicon)
app.get("/icon_x192.png", getIcon192)
app.get("/icon_x512.png", getIcon512)
app.get("/robots.txt", getRobots)
app.get("/site.webmanifest", getWebmanifest)

export default {
  async fetch(request: Request, env: Env, event: FetchEvent) {
    return app.fetch(request, env, event)
  },
}
