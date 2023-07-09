import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("http://localhost:3000");

await page.pdf({
    path: './XState Report.pdf',
    margin: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    printBackground: true,
    preferCSSPageSize: true,
});

await browser.close();
