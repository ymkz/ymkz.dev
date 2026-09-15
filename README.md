# ymkz.dev

## Resume PDF

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm dev
```

Open `http://localhost:3000/resume.pdf` (one-page resume) or
`http://localhost:3000/career.pdf` (two-page career history). PDFs are generated locally with
`@pdfme/jsx` and `@pdfme/generator`; no browser or external PDF service is needed.
The existing homepage is served alongside it.

- Edit `src/resume/document.tsx` to update the content and A4 layout. The resume uses
  ruled fields and a blank photo field; the career history
  uses larger text and splits before the 2023 modernization work.
- The content is based on [this Gist](https://gist.github.com/ymkz/24bc836529955b0941ed9f1d4cbfd2ce),
  retrieved on 2026-09-14. It is a local snapshot, not automatically synchronized.
  The pre-employment activity period is “在学中（約3年間）”, as corrected by the
  author; exact start/end dates remain unspecified.
- Each build downloads the regular and bold BIZ UDPGothic fonts from a pinned
  [Google Fonts revision](https://github.com/google/fonts/tree/6ce172f74aa355ea43eb964fa4a91570a4d3064d/ofl/bizudpgothic)
  and embeds them in the PDFs. Building requires network access; viewing the PDFs
  does not. Font files are kept in memory, not stored in the repository.
  The fonts use the [SIL Open Font License](https://github.com/google/fonts/blob/6ce172f74aa355ea43eb964fa4a91570a4d3064d/ofl/bizudpgothic/OFL.txt).
- `public/resume.pdf` and `public/career.pdf` are generated and ignored by Git. Wrangler's custom build
  runs `pnpm build` before development and deployment, including direct
  `pnpm exec wrangler deploy` invocations. Deploying is a separate action.
- During development, edits under `src/resume/` trigger a rebuild; refresh the PDF
  to see the result. If a separate hosting build uploads `public/` without invoking Wrangler,
  configure that build to run `pnpm build` first.
- The JSX API is beta. pdfme packages are pinned together in
  `pnpm-workspace.yaml`; check PDF layout when updating them.

```sh
pnpm lint
pnpm analyze
pnpm typecheck
pnpm build
```

## Tasks

- clean

```sh { name=clean }
find . -name '.wrangler' -type d -prune -exec rm -rf '{}' +
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name 'pnpm-lock.yaml' -type f -prune -exec rm -rf '{}' +
```
