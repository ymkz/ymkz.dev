/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const path = require('path')
const util = require('util')
const withTypescript = require('@zeit/next-typescript')

const copyFile = util.promisify(fs.copyFile)

module.exports = withTypescript({
  target: 'serverless',
  exportPathMap: async (defaultPathMap, { dev, dir, outDir }) => {
    if (dev) {
      return defaultPathMap
    }

    await copyFile(path.join(dir, 'public/robots.txt'), path.join(outDir, 'robots.txt'))

    return defaultPathMap
  }
})
