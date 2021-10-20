import { TestResult } from './types';
import chalk from 'chalk';

export const printResults = (results: TestResult[]) => {
	const totalNumber = results.length;
	const passedNumber = results.filter((r) => !!r.pass).length;
	const failed = results.filter((r) => !r.pass);
	const failedNumber = failed.length;

	// Print Errors
	failed.forEach((failedTest) => {
		console.log('\n');
		console.log(chalk.bold.redBright(failedTest.name));
		console.log(failedTest.failureMessage);
	});

	// Print Summary
	console.log('\n');
	console.log(chalk.bold('Summary'));
	console.log(chalk.dim(`${totalNumber} ${getTestOrTests(totalNumber)} run`));
	if (passedNumber)
		console.log(
			chalk.green(
				`${passedNumber} ${getTestOrTests(passedNumber)} passed`,
			),
		);
	if (failedNumber)
		console.log(
			chalk.red(`${failedNumber} ${getTestOrTests(failedNumber)} failed`),
		);

	console.log('\n');
};

const getTestOrTests = (num: number) => {
	if (num === 1) return 'test';
	return 'tests';
};
