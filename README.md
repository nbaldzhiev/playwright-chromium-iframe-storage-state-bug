# Repo to reproduce Playwright issue #

To reproduce:
1. clone the repository
2. debug test in `tests/foo.spec.ts` with a breakpoint at `await page.pause()`
3. open the browser's devtools and navigate to the Local Storage section

* in chromium, the local storage item set in the `newContext` call is missing (in all Playwright versions >1.37.1)
* in firefox, the local storage item exists (expected behaviour)
