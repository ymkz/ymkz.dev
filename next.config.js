/* eslint-disable @typescript-eslint/no-var-requires */

const size = require('next-size')
const css = require('@zeit/next-css')
const offline = require('next-offline')
const optimize = require('next-optimized-images')
const typescript = require('@zeit/next-typescript')
const withPlugins = require('next-compose-plugins')

const optimizeOptions = {
  responsive: {
    placeholder: true,
    sizes: [150, 300]
  }
}

const offlineOptions = {
  workboxOpts: {
    clientsClaim: true,
    skipWaiting: true,
    swDest: 'static/service-worker.js'
  }
}

const nextConfigs = {
  target: 'serverless',
  webpack: config => config
}

module.exports = withPlugins(
  [[size], [css], [optimize, optimizeOptions], [offline, offlineOptions], [typescript]],
  nextConfigs
)
