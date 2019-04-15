/* eslint-disable @typescript-eslint/no-var-requires */

const { parse } = require('url')

module.exports = async function(req, res) {
  console.log(req, res, parse(req.url, true))
  res.setHeader('Content-Type', 'text/html')
  res.end(`<div>Hello World</div>`)
}
