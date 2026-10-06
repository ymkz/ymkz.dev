# ymkz.dev

[Astro](https://astro.build/) generates the homepage and Japanese resume pages.
[Forme](https://docs.formepdf.com/html) converts the generated resume HTML to PDFs
inside Node.js using its bundled WASM engine.

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm dev
```

Open `http://localhost:3000/`, `/resume`, or `/career` for the HTML pages,
and `/resume.pdf` or `/career.pdf` for the PDFs.
Wrangler serves the generated `dist/` directory and rebuilds when files under
`src/`, `scripts/`, or `public/` change. External data changes need a manual rebuild.

- Edit `src/pages/index.astro` for the homepage.
- Edit `src/resume/data.json` for the shared resume content.
- Edit `src/pages/resume.astro`, `src/pages/career.astro`, and the components under
  `src/resume/` for the HTML and PDF layout. The supplied data produces a one-page
  resume and a two-page career history, with a page break after four work entries.
- `scripts/build-resume.mjs` downloads regular and bold BIZ UDPGothic from a pinned
  [Google Fonts revision](https://github.com/google/fonts/tree/6ce172f74aa355ea43eb964fa4a91570a4d3064d/ofl/bizudpgothic).
  Fonts are served from `dist/fonts/` and embedded in PDFs. Network access is
  required at build time; no browser, external compiler, or system font is needed.
  See the [SIL Open Font License](https://github.com/google/fonts/blob/6ce172f74aa355ea43eb964fa4a91570a4d3064d/ofl/bizudpgothic/OFL.txt).
- `dist/` is ignored by Git. `public/_headers` applies `X-Robots-Tag: noindex`
  to all static files. HTML pages and PDFs remain publicly accessible.

## External data

```sh
RESUME_DATA=/absolute/path/to/resume.json pnpm build
```

Use the same JSON fields as `src/resume/data.json`. Both HTML and PDFs use this
file; the JSON itself is not copied to `dist/`. Astro escapes text from the data.

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
- Biome checks Astro frontmatter but cannot track its use in templates;
  unused import/variable rules are disabled only for `.astro` files.
- Cloudflare's hosted build has not been tested for this trial.

## Tasks

- clean

```sh { name=clean }
find . -name '.wrangler' -type d -prune -exec rm -rf '{}' +
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name 'pnpm-lock.yaml' -type f -prune -exec rm -rf '{}' +
```
