# ymkz.dev

## Resume PDF

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm dev
```

[Typst](https://typst.app/) generates `public/resume.pdf` (one-page resume) and
`public/career.pdf` (two-page career history for the supplied content). Open
`http://localhost:3000/resume.pdf` or `http://localhost:3000/career.pdf` during development.
The existing homepage is served alongside them.

- Edit `src/resume/data.json` for the content. Both PDFs share this JSON data.
- Edit `src/resume/resume.typ`, `career.typ`, and `common.typ` for the layout.
  The career history starts a new page after the first four work entries;
  longer content can add pages automatically.
- The build uses Node.js built-ins and the Typst CLI, with no PDF-related npm packages.
  On Linux (including WSL) and macOS, x64/arm64 builds download Typst 0.15.1 from
  its official GitHub release into the ignored `.wrangler/typst/` cache.
  Node.js, network access, and `tar` with xz support are required.
- Each build downloads regular and bold BIZ UDPGothic from a pinned
  [Google Fonts revision](https://github.com/google/fonts/tree/6ce172f74aa355ea43eb964fa4a91570a4d3064d/ofl/bizudpgothic).
  Font files are temporary and removed after the build; the PDFs embed them and
  can be viewed offline. See the [SIL Open Font License](https://github.com/google/fonts/blob/6ce172f74aa355ea43eb964fa4a91570a4d3064d/ofl/bizudpgothic/OFL.txt).
- Generated PDFs are ignored by Git. `public/_headers` sets `X-Robots-Tag: noindex`
  for both PDFs; the files remain publicly accessible.

### External data

Use another JSON file with the same fields as `src/resume/data.json`:

```sh
RESUME_DATA=/absolute/path/to/resume.json pnpm build
```

The file can be outside the repository. The build reads it and injects the JSON
through Typst's `--input`; the data file is not copied into `public/`.
Without `RESUME_DATA`, the bundled JSON is used. The input is parsed as data,
not evaluated as Typst code.

### Cloudflare Workers

Set the Workers Builds **Build command** to `pnpm build`. Keep the deploy command
as `pnpm exec wrangler deploy`. Typst is downloaded automatically on the Linux
build image; no global installation is needed. To use external data in CI,
provide the JSON file before the build and set `RESUME_DATA` to its path.

Wrangler's custom build also runs `pnpm build` for local development and direct
CLI deployment. Changes under `src/resume/` trigger a rebuild during development;
changes to an external JSON file require a manual rebuild.

```sh
pnpm lint
pnpm analyze
pnpm build
```

## Tasks

- clean

```sh { name=clean }
find . -name '.wrangler' -type d -prune -exec rm -rf '{}' +
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name 'pnpm-lock.yaml' -type f -prune -exec rm -rf '{}' +
```
