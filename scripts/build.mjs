import { build } from "esbuild"

build({
  entryPoints: ["src/main.ts"],
  outfile: "dist/main.mjs",
  format: "esm",
  bundle: true,
  minify: process.env.NODE_ENV === "production" ? true : false,
  jsxFactory: "h",
  jsxFragment: "Fragment",
  loader: {
    ".txt": "text",
    ".ico": "base64",
    ".png": "base64",
    ".webmanifest": "text",
  },
}).then(() => {
  console.log("⚡ Done")
})
