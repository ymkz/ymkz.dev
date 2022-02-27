const { build } = require('esbuild')

build({
  entryPoints: ['src/worker.ts'],
  outfile: 'dist/worker.mjs',
  format: 'esm',
  bundle: true,
  minify: process.env.NODE_ENV === 'production' ? true : false,
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  loader: {
    '.txt': 'text',
    '.css': 'text',
    '.ico': 'binary',
    '.png': 'binary',
    '.webmanifest': 'text',
  },
})
