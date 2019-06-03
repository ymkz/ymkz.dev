/* eslint-disable @typescript-eslint/no-var-requires */

const size = require('next-size')
const css = require('@zeit/next-css')
const optimize = require('next-optimized-images')
const typescript = require('@zeit/next-typescript')
const withPlugins = require('next-compose-plugins')

const optimizeOptions = {
  responsive: {
    placeholder: true,
    sizes: [150, 300]
  }
}

const nextConfigs = {
  target: 'serverless',
  webpack: config => config
}

module.exports = withPlugins(
  [[size], [css], [optimize, optimizeOptions], [typescript]],
  nextConfigs
)
