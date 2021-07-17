const path = require('path');

module.exports = {
  testEnvironment: 'node',
  displayName: 'unit tests',
  preset: 'ts-jest',
  rootDir: path.resolve(__dirname),
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
  },
};
