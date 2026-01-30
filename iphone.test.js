const { Builder, By, until } = require('../selenium.config');
const assert = require('assert');

describe('Amazon iPhone Test', function() {
  this.timeout(60000);
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('Search iPhone, add to cart, and print price', async () => {
    await driver.get('https://www.amazon.com');

    await driver.findElement(By.id('twotabsearchtextbox')).sendKeys('iPhone');
    await driver.findElement(By.id('twotabsearchtextbox')).submit();

    await driver.wait(until.elementLocated(By.css('[data-component-type="s-search-result"] h2 a')), 10000);
    await driver.findElement(By.css('[data-component-type="s-search-result"] h2 a')).click();

    await driver.wait(until.elementLocated(By.id('add-to-cart-button')), 10000);
    await driver.findElement(By.id('add-to-cart-button')).click();

    const priceWhole = await driver.findElement(By.css('.a-price-whole')).getText();
    const priceFraction = await driver.findElement(By.css('.a-price-fraction')).getText();

    console.log(`iPhone Price: $${priceWhole}.${priceFraction}`);
  });
});
