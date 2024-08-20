# Repo to reproduce Playwright issue #32230

To reproduce:
1. clone the repository
2. install the project (`npm install` and `npx playwright install`)
3. debug test in `tests/foo.spec.ts` with a breakpoint at `await page.pause()`
4. open the browser's devtools and navigate to the Local Storage section
5. select origin `https://clausa.app.carto.com`

Result (in Playwright versions `>1.37.1`):
* in chromium, the local storage item set in the `newContext` call is missing;
* in firefox, the local storage item exists (expected behaviour).


```
  const context = await browser.newContext({
    storageState: {
      cookies: [],
      origins: [{ origin: 'https://clausa.app.carto.com', localStorage: [{ name: 'hello', value: 'world' }]}]
    }
  })
  const page = await context.newPage()
```

Local storage item missing in Chromium
![Local storage item missing in Chromium](https://github.com/user-attachments/assets/fad9ea25-df08-45e2-93b0-f52a26b7808a)

Local storage item present in Firefox
![Local storage item present in Firefox](https://github.com/user-attachments/assets/b1947bec-b4e5-4d66-a4cd-c8e682ff442b)
