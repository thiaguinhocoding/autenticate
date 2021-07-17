const path = require('path');
const rootDir = path.resolve(__dirname, '..');
const rootConfig = require(`${rootDir}/jest.config.js`);

module.exports = {
  ...rootConfig,
  ...{
    displayName: 'functional tests',
    testMatch: ['<rootDir>/tests/**/*.test.ts'],
  },
};
