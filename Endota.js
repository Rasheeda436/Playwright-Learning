const { chromium, firefox, webkit } = require('playwright');

const URL = 'https://endotaspa-avo.myshopify.com/'; // ✅ Make sure the URL starts with https://

(async () => {
  // --- Chromium ---
  const chromiumBrowser = await chromium.launch({ headless: false });
  const chromiumContext = await chromiumBrowser.newContext();
  const chromiumPage = await chromiumContext.newPage();
  await chromiumPage.goto(URL);
  console.log('Loaded in Chromium');
  await chromiumPage.waitForTimeout(5000); // Wait for 5 seconds
  await chromiumBrowser.close();

  // --- Firefox ---
  const firefoxBrowser = await firefox.launch({ headless: false });
  const firefoxContext = await firefoxBrowser.newContext();
  const firefoxPage = await firefoxContext.newPage();
  await firefoxPage.goto(URL);
  console.log('Loaded in Firefox');
  await firefoxPage.waitForTimeout(5000); // Wait for 5 seconds
  await firefoxBrowser.close();

  // --- WebKit ---
  const webkitBrowser = await webkit.launch({ headless: false });
  const webkitContext = await webkitBrowser.newContext();
  const webkitPage = await webkitContext.newPage();
  await webkitPage.goto(URL);
  console.log('Loaded in WebKit');
  await webkitPage.waitForTimeout(5000); // Wait for 5 seconds
  await webkitBrowser.close();
})();