require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({defaultViewport: {
    width: 1440, height: 900
  }});
  const page = await browser.newPage();
  await page.goto(process.env.PERSONAL_URL);
  const thumbnails = await page.$$('.media-thumbnail');
  console.log(thumbnails[0]);
  await thumbnails[0].click();
  await page.screenshot({path: 'screenshot.png', fullPage: true});
  await page.close();
})();
