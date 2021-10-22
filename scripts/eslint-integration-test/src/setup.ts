import { cwd, chdir } from 'process';
import { existsSync, writeFileSync, unlinkSync } from 'fs';
import { testFileName, eslintConfigFileName } from './config';

let _cwd: string;

const temporaryFiles = [testFileName, eslintConfigFileName];

export const preflightChecks = () => {
	_cwd = cwd();

	if (_cwd.endsWith('/source')) {
		chdir('./scripts/eslint-integration-test');
	} else if (!_cwd.endsWith('/source/scripts/eslint-integration-test')) {
		console.error(
			'This command must be run from either the source or eslint-integration-test directory',
		);
		process.exit(1);
	}

	// Ensure temporary files were removed after the last run
	temporaryFiles.forEach((fileName) => {
		if (existsSync(fileName)) {
			throw new Error(
				`${cwd()}/${fileName} already exists. Please check the contents, remove if possible and try again.`,
			);
		}

		writeFileSync(fileName, '');
	});
};

export const cleanup = () => {
	temporaryFiles.forEach((fileName) => {
		unlinkSync(`${cwd()}/${fileName}`);
	});
};

export const finalCleanup = () => {
	if (_cwd) chdir(_cwd);
};
