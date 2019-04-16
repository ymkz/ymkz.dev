/* eslint-disable @typescript-eslint/no-var-requires */

!(async () => {
  const puppeteer = require('puppeteer')
  const { percySnapshot } = require('@percy/puppeteer')

  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  await page.goto(process.env.NOW_URL)
  if (process.env.CI) {
    await percySnapshot(page, '/')
  }

  browser.close()
})()
