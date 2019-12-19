import { Selector } from 'testcafe'

fixture('E2E').page(process.env.PREVIEW_URL || 'https://ymkz.co')

test('Capture screenshot', async t => {
  await t.takeScreenshot({ path: 'index.png', fullPage: true })
  await t.click(Selector('header a').withText('about'))
  await t.takeScreenshot({ path: 'about.png', fullPage: true })
  await t.click(Selector('header a').withText('contact'))
  await t.takeScreenshot({ path: 'contact.png', fullPage: true })
  await t.click(Selector('header a').withText('projects'))
  await t.takeScreenshot({ path: 'projects.png', fullPage: true })
})
