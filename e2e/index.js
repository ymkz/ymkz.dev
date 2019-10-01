/* eslint-disable @typescript-eslint/no-var-requires */

!(async () => {
  const isLocal = !process.env.PERCY_TOKEN
  const puppeteer = require('puppeteer')
  const path = isLocal && require('path')
  const makeDir = isLocal && require('make-dir')
  const screenshotsDir = isLocal && (await makeDir(`e2e/__screenshots__/${Date.now()}`))
  const percySnapshot = !isLocal && require('@percy/puppeteer').percySnapshot

  async function screenshot(page, name) {
    if (process.env.PERCY_TOKEN) {
      await percySnapshot(page, name, { widths: [415, 1920], minHeight: 1080 })
    } else {
      await page.screenshot({ fullPage: true, path: path.join(screenshotsDir, `${name}.png`) })
    }
  }

  const baseUrl = 'http://localhost:3000'
  const timeoutOption = { timeout: 10000 }
  const waitOption = { waitUntil: 'domcontentloaded' }
  const puppeteerOption = { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] }
  const browser = await puppeteer.launch(puppeteerOption)
  const page = await browser.newPage()

  await page.setViewport({ width: 1920, height: 1080 })

  await page.goto(baseUrl, { ...waitOption })
  await screenshot(page, 'index')

  page.click('a[href="/about"]')
  await page.waitForNavigation({ ...waitOption, ...timeoutOption })
  await screenshot(page, 'about')

  page.click('a[href="/work"]')
  await page.waitForNavigation({ ...waitOption, ...timeoutOption })
  await screenshot(page, 'work')

  browser.close()
})()
