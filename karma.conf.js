
const puppeteer = require('puppeteer');

module.exports = function (config) {
  config.set({
    browsers: ['CustomChrome'],
    customLaunchers: {
      CustomChrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },
    // other configurations...
  });

  config.set({
    customLaunchers: {
      PuppeteerChrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    }
  });
};

