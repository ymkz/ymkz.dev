/* eslint-disable @typescript-eslint/no-var-requires */

const compose = require('next-compose-plugins')
const css = require('@zeit/next-css')

const nextOption = {
  poweredByHeader: false,
  reactStrictMode: true,
  devIndicators: { autoPrerender: false },
}

module.exports = compose([[css]], nextOption)
