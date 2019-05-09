/* eslint-disable @typescript-eslint/no-var-requires */

const size = require('next-size')
const css = require('@zeit/next-css')
const offline = require('next-offline')
const optimize = require('next-optimized-images')
const typescript = require('@zeit/next-typescript')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
  [[size], [css], [optimize], [typescript], [offline, { generateInDevMode: true }]],
  {
    target: 'serverless',
    webpack: config => config
  }
)
