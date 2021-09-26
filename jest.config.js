module.exports = {
  setupFilesAfterEnv: ['./jest.setup.ts'],
  verbose: true,
  collectCoverage: true,
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/test/test-utils.js'],
  testEnvironment: 'jsdom',
};
