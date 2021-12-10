import { readFileSync, writeFileSync } from 'fs';
import { eslintConfigFileName, testFileName } from './config';

export const writeToEslintConfigfile = (content: string) => {
	writeFileSync(eslintConfigFileName, content);
};

export const writeToTestfile = (content: string) => {
	writeFileSync(testFileName, content);
};

export const readTestFile = () => {
	return readFileSync(testFileName, 'utf-8');
};
