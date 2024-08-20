# Repo to reproduce Playwright issue #

To reproduce:
1. clone the repository
2. debug test in `tests/foo.spec.ts` with a breakpoint at `await page.pause()`
3. open the browser's devtools and navigate to the Local Storage section
4. select origin `https://clausa.app.carto.com`

Result (in Playwright versions `>1.37.1`):
* in chromium, the local storage item set in the `newContext` call is missing;
* in firefox, the local storage item exists (expected behaviour).

Local storage item missing in Chromium
![Local storage item missing in Chromium](https://github.com/user-attachments/assets/ab5caff2-75a6-4e53-a228-eba2286d9cbd)

Local storage item present in Firefox
![Local storage item present in Firefox](https://github.com/user-attachments/assets/b1947bec-b4e5-4d66-a4cd-c8e682ff442b)
