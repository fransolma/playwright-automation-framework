const { defineConfig } = require('@playwright/test');
const path = require('node:path');

require('dotenv').config({
  path: path.resolve(__dirname, '.env')
});

module.exports = defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://automationexercise.com'
  }
});