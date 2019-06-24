/* eslint-disable @typescript-eslint/no-var-requires */

!(async () => {
  const makeDir = require('make-dir')
  const puppeteer = require('puppeteer')
  const { percySnapshot } = require('@percy/puppeteer')

  const __CI__ = process.env.CI
  const baseUrl = 'http://localhost:3000'
  const screenshotsDir = await makeDir('tests/screenshots')

  // @ts-ignore
  async function screenshot(page, name) {
    if (__CI__) {
      await percySnapshot(page, name)
    } else {
      await page.screenshot({ fullPage: true, path: `${screenshotsDir}/${name}.png` })
    }
  }

  // Setup browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1920, height: 1080 })

  // Test index page
  await page.goto(baseUrl)
  await screenshot(page, 'index')

  // Test /about page
  await page.goto(`${baseUrl}/about`)
  await screenshot(page, 'about')

  // Test /work page
  await page.goto(`${baseUrl}/work`)
  await screenshot(page, 'work')

  browser.close()
})()
