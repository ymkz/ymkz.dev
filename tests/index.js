/* eslint-disable @typescript-eslint/no-var-requires */

!(async () => {
  const puppeteer = require('puppeteer')
  const { percySnapshot } = require('@percy/puppeteer')

  const __CI__ = process.env.CI
  const url = `http://localhost:3000`

  // Setup browser
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  page.setViewport({ width: 1920, height: 1080 })

  // Test index page
  await page.goto(url)
  if (__CI__) {
    await percySnapshot(page, '/')
  } else {
    await page.screenshot({ fullPage: true, path: 'tests/screenshots/index.png' })
  }

  // Test /about page
  await page.goto(`${url}/about`)
  if (__CI__) {
    await percySnapshot(page, '/about')
  } else {
    await page.screenshot({ fullPage: true, path: 'tests/screenshots/about.png' })
  }

  // Test /work page
  await page.goto(`${url}/work`)
  if (__CI__) {
    await percySnapshot(page, '/work')
  } else {
    await page.screenshot({ fullPage: true, path: 'tests/screenshots/work.png' })
  }

  browser.close()
})()
