import { chromium } from "playwright";

const isTest = process.argv[2] !== '--production'

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("http://localhost:3000");

await page.waitForLoadState('networkidle');

await page.pdf({
    path: isTest ? './XState Report - Test.pdf' : './XState Report.pdf',
    printBackground: true,
    preferCSSPageSize: true,
    format: 'A4',
});

await browser.close();
