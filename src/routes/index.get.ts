import { Context } from "hono"
import { h, renderSSR } from "nano-jsx"
import { IndexPage } from "~/pages/index"

const makeHTML = (body: string) => {
  return `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="description" content="A website about ymkz" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#212121" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="ymkz.co" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#212121" />
    <title>ymkz.co</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500;700&display=swap" />
    <link rel="manifest" href="/site.webmanifest" crossorigin="use-credentials" />
  </head>
  <body>
    ${body}
  </body>
</html>
`
}

export const getIndexPage = (ctx: Context) => {
  const body = renderSSR(h(IndexPage, null))
  const html = makeHTML(body)
  return ctx.html(html)
}
