/* eslint-disable @typescript-eslint/no-var-requires */

const size = require('next-size')
const buildId = require('next-build-id')
const optimize = require('next-optimized-images')
const typescript = require('@zeit/next-typescript')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([[size], [optimize], [typescript]], {
  target: 'serverless',
  webpack: config => config,
  generateBuildId: async () => {
    const fromGit = await buildId({ dir: __dirname })
    return fromGit.id
  }
})
