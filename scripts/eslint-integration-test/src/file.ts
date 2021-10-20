import { writeFileSync, readFileSync } from 'fs';
import { testFileName } from './config';

export const writeToTestfile = (content: string) => {
	writeFileSync(testFileName, content);
};

export const readTestFile = () => {
	return readFileSync(testFileName, 'utf-8');
};
