/// <reference types="node" />

declare namespace NodeJS {
  type ProcessEnv = {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly CI: boolean
  }
}
