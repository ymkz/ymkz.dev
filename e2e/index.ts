import puppeteer from 'puppeteer'

async function sleep(ms: number) {
  new Promise(resolve => setTimeout(resolve, ms))
}

describe('visual regression test with image snapshot', () => {
  let browser: puppeteer.Browser

  const query = 'env=test'
  const identifier = process.env.IDENTIFIER
  const url = identifier ? `https://${identifier}.now.sh?${query}` : `https://ymkz.co?${query}`

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
  })

  it('check visual regression at /', async () => {
    const page = await browser.newPage()
    await page.setViewport({ width: 1920, height: 1080 })
    await sleep(1000)
    await page.goto(url)
    const image = await page.screenshot({ fullPage: true })
    expect(image).toMatchImageSnapshot({ customSnapshotIdentifier: 'vrt' })
  })

  afterAll(async () => {
    await browser.close()
  })
})
