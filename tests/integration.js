/* eslint-disable @typescript-eslint/no-var-requires */

const { parse } = require('url')

module.exports = async function(req, res) {
  console.log(req, res, parse(req.url, true))
}
