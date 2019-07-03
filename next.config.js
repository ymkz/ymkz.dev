/* eslint-disable @typescript-eslint/no-var-requires */

const size = require('next-size')
const webpack = require('webpack')
const css = require('@zeit/next-css')
const offline = require('next-offline')
const dotenv = require('dotenv-webpack')
const optimize = require('next-optimized-images')
const typescript = require('@zeit/next-typescript')
const withPlugins = require('next-compose-plugins')

const optimizeOptions = {
  responsive: {
    placeholder: true,
    sizes: [128, 256, 384]
  }
}

const offlineOptions = {
  workboxOpts: {
    clientsClaim: true,
    skipWaiting: true,
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'google-fonts',
          cacheableResponse: { statuses: [0, 200] },
          expiration: { maxAgeSeconds: 60 * 60 * 24 * 365 }
        }
      }
    ]
  }
}

const nextConfigs = {
  webpack: (config, options) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,
      new dotenv({ systemvars: true }),
      new webpack.EnvironmentPlugin({ BUILD_ID: JSON.stringify(options.buildId) })
    ]

    return config
  }
}

module.exports = withPlugins(
  [[size], [css], [optimize, optimizeOptions], [offline, offlineOptions], [typescript]],
  nextConfigs
)
