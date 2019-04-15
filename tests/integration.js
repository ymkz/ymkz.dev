/* eslint-disable @typescript-eslint/no-var-requires */

const { parse } = require('url')
const puppeteer = require('puppeteer-core')
const chrome = require('chrome-aws-lambda')

const japanese =
  'https://rawcdn.githack.com/googlei18n/noto-cjk/9326451d9b4f32ec7f8640581c5053cc192039f2/NotoSansJP-Regular.otf'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function run(url) {
  await chrome.font(japanese)
  const browser = await puppeteer.launch({
    args: chrome.args,
    defaultViewport: chrome.defaultViewport,
    executablePath: await chrome.executablePath,
    headless: chrome.headless
  })
  const page = await browser.newPage()
  await page.goto(url)
  await sleep(2000)
  const file = await page.screenshot({ fullPage: true })
  await browser.close()
  return file
}

module.exports = async function(req, res) {
  console.log(req, res, parse(req.url, true))
  const file = await run('https://ymkz.now.sh/about')
  res.statusCode = 200
  res.setHeader('Content-Type', 'image/png')
  res.end(file)
  // res.setHeader('Content-Type', 'text/html')
  // res.end(`<div>Hello World</div>`)
}
