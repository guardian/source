import { ExecError, Test, TestResult } from './types';
import { readTestFile, writeToTestfile } from './file';
import { testFileName, eslintConfigFileName } from './config';
import { execSync } from 'child_process';
import { cwd } from 'process';
import ora from 'ora';
import chalk from 'chalk';

const indexOfFirstMatch = <T>(
	arr: T[],
	predicate: (item: T) => boolean,
): number | null => {
	for (const [index, item] of arr.entries()) {
		if (predicate(item)) return index;
	}
	return null;
};

/**
 * This function parses the error message that eslint outputs to get the individual errors
 *
 * It is built on the assumption that errors look a bit like this:
 *
 *     $ /path/source/node_modules/.bin/eslint integration-test-content.ts --ext .ts
 *
 *     /path/source/scripts/eslint-integration-test/integration-test-content.ts
 *     1:1  error  @guardian/src-* packages are deprecated. Import from '@guardian/source-react-components' instead  @guardian/source/valid-import-path
 *
 *     ✖ 1 problem (1 error, 0 warnings)
 *     1 error and 0 warnings potentially fixable with the `--fix` option.
 *
 *     info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command
 *
 */
const getErrorsFromExecError = (err: ExecError): string[] | null => {
	// Get rid of everything before and including the following line
	// /path/source/scripts/eslint-integration-test/integration-test-content.ts
	const splitOnFile = err.stdout.split(`${cwd()}/${testFileName}`);
	if (splitOnFile.length < 2) return null;

	// Get rid of everything after and including the following line
	// ✖ 1 problem (1 error, 0 warnings)
	const splitOnNewLine = splitOnFile[1].split('\n');
	const summaryIndex = indexOfFirstMatch(splitOnNewLine, (item) =>
		item.startsWith('✖'),
	);
	if (!summaryIndex || summaryIndex < 3) return null;

	// Get rid of the `1:1  error` at the start of each line
	const errorsWithRule = splitOnNewLine
		.slice(0, summaryIndex)
		.filter((item) => !!item)
		.map((item) => item.split('error'))
		.filter((itemArr) => itemArr.length > 1)
		.map((itemArr) => itemArr.slice(1).join('error').trim());

	if (!errorsWithRule.length) return null;

	// Get rid of the `@guardian/source/valid-import-path` at the end of each line
	const errors = errorsWithRule
		.map((item) => item.split('  '))
		.filter((itemArr) => itemArr.length > 1)
		.map((itemArr) => itemArr.slice(0, -1).join('  '));

	if (!errors.length) return null;

	return errors;
};

const errorsEqual = (expected: string[] = [], actual: string[]): boolean => {
	const sortedExpected = expected.sort();
	const sortedActual = actual.sort();

	if (sortedExpected.length !== sortedActual.length) return false;

	for (let i = 0; i < sortedExpected.length; i++) {
		if (sortedExpected[i] !== sortedActual[i]) return false;
	}

	return true;
};

export const test = (config: Test): TestResult => {
	const spinner = ora(config.name).start();

	writeToTestfile(config.contents);

	try {
		execSync(
			`yarn eslint ${testFileName} --ext .ts ${
				config.fix ? '--fix' : ''
			} -c ${eslintConfigFileName} --no-eslintrc`,
			{
				encoding: 'utf-8',
				stdio: 'pipe',
			},
		);
	} catch (e) {
		const err = e as ExecError;
		const errors = getErrorsFromExecError(err);

		if (!errors) {
			spinner.fail();
			return {
				...config,
				pass: false,
				failureMessage: `
  An unexpected error occurred: ${err.message}`,
			};
		}

		if (!errorsEqual(config.expectedErrors, errors)) {
			spinner.fail();
			return {
				...config,
				pass: false,
				failureMessage: `
  Expected the following errors:
  ${chalk.green(config.expectedErrors?.join('\n') ?? 'undefined')}
  Received:
  ${chalk.red(errors.join('\n'))}`,
			};
		}
	}

	if (config.expectedOutput) {
		const actualOutput = readTestFile();
		if (actualOutput !== config.expectedOutput) {
			spinner.fail();
			return {
				...config,
				pass: false,
				failureMessage: `
  Expected output to equal:
  ${chalk.green(config.expectedOutput)}
  Received:
  ${chalk.red(actualOutput)}`,
			};
		}
	}

	spinner.succeed();
	return { ...config, pass: true };
};
