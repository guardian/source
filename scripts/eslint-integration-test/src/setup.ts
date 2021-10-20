import { cwd, chdir } from 'process';
import { existsSync, writeFileSync, unlinkSync } from 'fs';
import { testFileName } from './config';

let _cwd: string;

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

	if (existsSync(testFileName)) {
		throw new Error(
			`${cwd()}/${testFileName} already exists. Please check the contents, remove if possible and try again.`,
		);
	}

	writeFileSync(testFileName, '');
};

export const cleanup = () => {
	unlinkSync(`${cwd()}/${testFileName}`);
};

export const finalCleanup = () => {
	if (_cwd) chdir(_cwd);
};
