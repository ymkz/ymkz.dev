/* eslint-disable @typescript-eslint/no-var-requires */

const withSize = require('next-size')
const withTypescript = require('@zeit/next-typescript')

module.exports = withSize(
  withTypescript({
    target: 'serverless'
  })
)
