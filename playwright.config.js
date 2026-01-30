const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 60000,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 }
  }
});
