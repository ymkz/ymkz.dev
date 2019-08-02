/* eslint-disable @typescript-eslint/no-var-requires */

!(async () => {
  const makeDir = require('make-dir')
  const puppeteer = require('puppeteer')
  const { percySnapshot } = require('@percy/puppeteer')

  const __CI__ = process.env.CI
  const baseUrl = 'http://localhost:3000'
  const screenshotsDir = await makeDir('tests/__screenshots__')

  async function screenshot(page, name) {
    if (__CI__) {
      await percySnapshot(page, name)
    } else {
      await page.screenshot({ fullPage: true, path: `${screenshotsDir}/${name}.png` })
    }
  }

  const option = { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] }
  const browser = await puppeteer.launch(option)
  const page = await browser.newPage()
  await page.setViewport({ width: 1920, height: 1080 })

  await page.goto(baseUrl)
  await screenshot(page, 'index')

  await page.goto(`${baseUrl}/about`)
  await screenshot(page, 'about')

  await page.goto(`${baseUrl}/work`)
  await screenshot(page, 'work')

  browser.close()
})()
