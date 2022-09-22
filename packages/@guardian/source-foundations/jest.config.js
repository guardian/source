/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	setupFilesAfterEnv: ['./src/utils/jest-matchers/setup-custom-matchers.ts'],
};
