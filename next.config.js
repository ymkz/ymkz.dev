/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack')
const css = require('@zeit/next-css')
const offline = require('next-offline')
const optimize = require('next-optimized-images')
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
        handler: 'StaleWhileRevalidate',
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
  target: 'serverless',
  webpack: (config, options) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,
      new webpack.EnvironmentPlugin({ BUILD_ID: JSON.stringify(options.buildId) })
    ]

    return config
  }
}

module.exports = withPlugins(
  [[css], [optimize, optimizeOptions], [offline, offlineOptions]],
  nextConfigs
)
