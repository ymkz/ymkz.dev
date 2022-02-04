import { Context } from "hono"
import { h, renderSSR } from "nano-jsx"

const IndexPage = () => {
  return (
    <div id="root">
      <main class="container">
        <div class="motto">
          Catch
          <br />
          the
          <br />
          wind.
        </div>
        <div class="profile">
          I&apos;m Kazuya Yamashita. a.k.a ymkz.
          <br />
          a web engineer, good at web frontend.
          <br />
          sleep, walk and write code.
        </div>
        <div class="contact">
          <img src="/avatar.png" class="avatar" alt="" />
          <div class="social">
            <a
              class="link"
              href="https://github.com/ymkz"
              rel="noreferrer noopener"
              target="_blank"
              aria-label="github icon link"
            >
              <svg width="24px" height="24px" viewBox="0 0 24 24">
                <path
                  d="M20.116 5.901a3.883 3.883 0 0 0-.26-.31a4.413 4.413 0 0 0 .21-.76a5.284 5.284 0 0 0-.35-2.8s-1.12-.35-3.69 1.38a12.477 12.477 0 0 0-3.35-.45a12.604 12.604 0 0 0-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.263 5.263 0 0 0-.35 2.77a4.21 4.21 0 0 0 .22.79c-.09.1-.18.21-.26.31a5.14 5.14 0 0 0-1.12 3.3a7.686 7.686 0 0 0 .04.85c.32 4.43 3.27 5.46 6.08 5.78a2.558 2.558 0 0 0-.77 1.39a4.022 4.022 0 0 0-.13 1.09v1.31c-1.119.1-2.267-.063-2.623-1.061a5.695 5.695 0 0 0-1.834-2.413a1.179 1.179 0 0 1-.17-.112a1.001 1.001 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.003.812.81 1.337 1.143 1.515a4.466 4.466 0 0 1 .923 1.359c.364 1.023 1.429 2.578 4.466 2.376l.002.098l.004.268a1 1 0 0 0 1 1H15.026a1 1 0 0 0 1-1s.008-3.16.008-3.69a4.024 4.024 0 0 0-.13-1.09l-.002-.006l.004.006c-.009-.035-.022-.063-.032-.097a2.532 2.532 0 0 0-.74-1.293l.012.021l-.02-.02c2.81-.32 5.74-1.37 6.06-5.78a7.687 7.687 0 0 0 .04-.85a5.23 5.23 0 0 0-1.11-3.3z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              class="link"
              href="https://twitter.com/ymkzly"
              rel="noreferrer noopener"
              target="_blank"
              aria-label="twitter icon link"
            >
              <svg width="24px" height="24px" viewBox="0 0 24 24">
                <path
                  d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              class="link"
              href="https://facebook.com/ymkzly"
              rel="noreferrer noopener"
              target="_blank"
              aria-label="facebook icon link"
            >
              <svg width="24px" height="24px" viewBox="0 0 24 24">
                <path
                  d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

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
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    ${body}
  </body>
</html>
`
}

export const index = (ctx: Context) => {
  const body = renderSSR(<IndexPage />)
  const html = makeHTML(body)
  return ctx.html(html)
}
