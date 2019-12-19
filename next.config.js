/* eslint-disable @typescript-eslint/no-var-requires */

const compose = require('next-compose-plugins')
const offline = require('next-offline')
const css = require('@zeit/next-css')

const offlineOption = {
  workboxOpts: {
    clientsClaim: true,
    skipWaiting: true,
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 365 * 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: /\.(?:otf|ttc|ttf|woff|woff2|font.css)$/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'static-font-assets',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'static-image-assets',
          expiration: {
            maxEntries: 64,
            maxAgeSeconds: 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: /\.js$/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'static-js-assets',
          expiration: {
            maxEntries: 16,
            maxAgeSeconds: 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: /\.(?:css|less)$/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'static-style-assets',
          expiration: {
            maxEntries: 16,
            maxAgeSeconds: 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: /.*/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'others',
          expiration: {
            maxEntries: 16,
            maxAgeSeconds: 24 * 60 * 60,
          },
        },
      },
    ],
  },
}

const nextOption = {
  poweredByHeader: false,
  devIndicators: { autoPrerender: false },
}

module.exports = compose([[css], [offline, offlineOption]], nextOption)
