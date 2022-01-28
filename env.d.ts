/// <reference types="@cloudflare/workers-types" />

import "hono"

declare module "hono" {
  interface Env {
    _: KVNamespace
  }
}
