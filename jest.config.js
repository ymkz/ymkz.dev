module.exports = {
  roots: ['<rootDir>/'],
  collectCoverageFrom: ['**/src/**/*.(js|ts|tsx)'],
  testMatch: ['<rootDir>/tests/**/*.test.(js|ts|tsx)'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    '^~/(.+)': '<rootDir>/src/$1',
    '(.+).(png|jpg|jpeg|gif|svg|ttf|otf|woff|woff2|resize|inline)$':
      '<rootDir>/scripts/image-stub.ts'
  },
  setupFilesAfterEnv: ['<rootDir>/scripts/setup-files-after-env.ts']
}
