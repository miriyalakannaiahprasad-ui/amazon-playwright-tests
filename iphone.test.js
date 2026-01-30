const { test } = require('@playwright/test');

test('Search iPhone and print price', async ({ page }) => {
  await page.goto('https://www.amazon.com');

  await page.fill('#twotabsearchtextbox', 'iPhone');
  await page.press('#twotabsearchtextbox', 'Enter');

  await page.waitForSelector('[data-component-type="s-search-result"]');
  await page.click('[data-component-type="s-search-result"] h2 a');

  await page.waitForSelector('#add-to-cart-button');
  await page.click('#add-to-cart-button');

  const priceWhole = await page.locator('.a-price-whole').first().textContent();
  const priceFraction = await page.locator('.a-price-fraction').first().textContent();

  console.log(`iPhone Price: $${priceWhole}.${priceFraction}`);
});
