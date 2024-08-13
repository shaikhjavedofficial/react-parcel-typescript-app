export {};

module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '\\.[jt]sx?$': 'babel-jest',
  },
  
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/mockFile.ts',
    '^~/(.*)$': '<rootDir>/$1',
  },
};
