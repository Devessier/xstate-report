import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("http://localhost:3000");

await page.waitForLoadState('networkidle');

await page.pdf({
    path: './XState Report.pdf',
    printBackground: true,
    preferCSSPageSize: true,
    format: 'A4',
});

await browser.close();
