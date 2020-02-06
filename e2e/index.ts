import puppeteer from 'puppeteer'

describe('visual regression test with image snapshot', () => {
  let browser: puppeteer.Browser

  const identifier = process.env.IDENTIFIER
  const url = `https://${identifier}.now.sh`

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
  })

  it('check visual regression at /', async () => {
    const page = await browser.newPage()
    await page.setViewport({ width: 1920, height: 1080 })
    await page.goto(url)
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot()
  })

  afterAll(async () => {
    await browser.close()
  })
})
