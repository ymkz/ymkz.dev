module.exports = {
  roots: ['<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/scripts/jest-setup.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.(js|ts|tsx)'],
  testMatch: ['<rootDir>/src/**/__tests__/*.(js|ts|tsx)', '<rootDir>/e2e/**/*.(js|ts|tsx)'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    '^~/(.+)': '<rootDir>/src/$1',
    '(.+).(png|jpg|jpeg|gif|svg|ttf|otf|woff|woff2)$': 'jest-transform-stub',
  },
}
