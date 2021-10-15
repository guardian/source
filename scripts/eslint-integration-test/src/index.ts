import chalk from 'chalk';
import { testConfig } from '../test-config';
import { cleanup, finalCleanup, preflightChecks } from './setup';
import { printResults } from './print';
import { test } from './tester';

const main = () => {
	console.log('Running `@guardian/eslint-plugin-source` integration tests\n');

	try {
		preflightChecks();

		console.log(chalk.bold('Results'));
		const results = testConfig.map((config) => test(config));
		printResults(results);

		cleanup();
	} catch (e) {
		console.error(e);
	} finally {
		finalCleanup();
	}
};

if (require.main === module) {
	main();
}
