import { test } from '@playwright/test'

const iframeAppURL = 'https://carto-app-iframe-e2e-1.web.app/'
const cartoPublicMapUrl = 'https://clausa.app.carto.com/map/0d777e5d-1fb8-4ecd-a0ed-11b64ae8e45e'
const iframeResolution = '1024x768'

/**
 * Quick instructions:
 *  debug at line `await page.pause()` and view the local storage in the dev tools of the corresponding browser
 *    --> in Chromium, the local storage item assigned in the `newContext` call is MISSING
 *    --> in Firefox, the local storage item assigned in the `newContext` call is PRESENT
 */
test('foo', async ({ browser }) => {
  const context = await browser.newContext({
    storageState: {
      cookies: [],
      origins: [{ origin: 'https://clausa.app.carto.com', localStorage: [{ name: 'hello', value: 'world' }]}]
    }
  })
  const page = await context.newPage()

  await page.goto(`${iframeAppURL}/?${cartoPublicMapUrl}#${iframeResolution}`)
  await page.pause()
})
