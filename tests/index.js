/* eslint-disable @typescript-eslint/no-var-requires */

!(async () => {
  const makeDir = require('make-dir')
  const puppeteer = require('puppeteer')
  const { percySnapshot } = require('@percy/puppeteer')

  const __CI__ = process.env.CI
  const url = 'http://localhost:3000'

  const screenshotsDir = await makeDir('tests/screenshots')

  // Setup browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1920, height: 1080 })

  // Test index page
  await page.goto(url)
  if (__CI__) {
    await percySnapshot(page, '/')
  } else {
    await page.screenshot({ fullPage: true, path: `${screenshotsDir}/index.png` })
  }

  // Test /about page
  await page.goto(`${url}/about`)
  if (__CI__) {
    await percySnapshot(page, '/about')
  } else {
    await page.screenshot({ fullPage: true, path: `${screenshotsDir}/about.png` })
  }

  // Test /work page
  await page.goto(`${url}/work`)
  if (__CI__) {
    await percySnapshot(page, '/work')
  } else {
    await page.screenshot({ fullPage: true, path: `${screenshotsDir}/work.png` })
  }

  browser.close()
})()
