# ymkz.dev

The homepage is `public/index.html`. [Forme](https://docs.formepdf.com/html)
generates Japanese resume and career history PDFs in Node.js using its bundled
WASM engine.

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm dev
```

Open `http://localhost:3000/`, `/resume.pdf`, or `/career.pdf`.
Wrangler serves `public/` and rebuilds the PDFs when files under `src/resume/`
or `scripts/` change. External data changes need a manual rebuild.

- Edit `src/resume/data.json` for the shared resume content.
- Edit `src/resume/templates.mjs` and `src/resume/style.css` for the PDF layout.
  The supplied data produces a one-page resume and a two-page career history,
  with a page break after four work entries.
- `scripts/build-resume.mjs` downloads regular and bold BIZ UDPGothic from a pinned
  [Google Fonts revision](https://github.com/google/fonts/tree/6ce172f74aa355ea43eb964fa4a91570a4d3064d/ofl/bizudpgothic)
  and embeds them in the PDFs. Network access is required at build time; no
  browser, external compiler, or system font is needed.
  See the [SIL Open Font License](https://github.com/google/fonts/blob/6ce172f74aa355ea43eb964fa4a91570a4d3064d/ofl/bizudpgothic/OFL.txt).
- Generated `public/resume.pdf` and `public/career.pdf` are ignored by Git.
  `public/_headers` applies `X-Robots-Tag: noindex` to all static files.
  The homepage and PDFs remain publicly accessible.

## External data

```sh
RESUME_DATA=/absolute/path/to/resume.json pnpm build
```

Use the same JSON fields as `src/resume/data.json`. Both PDFs use this
file; its text is HTML-escaped before rendering. The JSON is not copied to
`public/`.

## Cloudflare Workers

Set the Workers Builds **Build command** to `pnpm build` and the deploy command
to `pnpm exec wrangler deploy`. Wrangler's custom build also runs `pnpm build`
for local development and direct CLI deployment.

```sh
pnpm lint
pnpm analyze
pnpm build
```

## Forme trial limits

- Forme supports a subset of HTML/CSS. Any render warning fails the PDF build.
- The work-history rows use fixed-width flex columns because Forme's automatic
  table sizing squeezes the period column with the supplied Japanese content.
  A row taller than a page needs a different layout; repeating work-history
  headers across additional pages is not implemented.
- The HTML input API currently omits PDF title/author metadata.

## Tasks

- clean

```sh { name=clean }
find . -name '.wrangler' -type d -prune -exec rm -rf '{}' +
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name 'pnpm-lock.yaml' -type f -prune -exec rm -rf '{}' +
```
