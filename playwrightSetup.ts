import { chromium, Browser, Page } from "playwright";

let browser: Browser;
let page: Page;

export async function setupPlaywright() {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto("https://pulse.eco/");
}

export async function teardownPlaywright() {
  await browser.close();
}

export { browser, page };
