import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { chdir, cwd } from 'process';
import * as rimraf from 'rimraf';
import { getAllComponentsAndPackages } from './get-all-components';
import { getComponentUsage } from './get-component-usage';
import { getEnrichedResults } from './get-enriched-results';

const main = async () => {
	console.log('Finding Source usage');
	const componentsWithPackage = await getAllComponentsAndPackages();

	// Get the current working directory so we can restore that at the end
	// If it's not the root source directory then fall over as the script won't work
	const _cwd = cwd();
	if (!_cwd.endsWith(`/source`)) {
		console.error('This command must be run from the source directory');
		process.exit(1);
	}

	try {
		chdir('./scripts/get-usage');

		// The script cleans up after itself so if there's already a tmp directory it might have something
		// else in it which we don't want to delete
		if (existsSync('./tmp')) {
			throw new Error(
				`${cwd()}/tmp directory already exists. Please remove first.`,
			);
		}

		const componentUsage = getComponentUsage();

		// Delete all of the cloned repos
		console.log(`Deleting ${cwd()}/tmp`);
		rimraf.sync(`${cwd()}/tmp`);
		console.log(`Formatting data`);

		const data = getEnrichedResults(componentUsage, componentsWithPackage);

		if (!existsSync('./results')) {
			mkdirSync('./results');
		}

		writeFileSync('results/results.json', JSON.stringify(data, null, 2));
	} catch (e) {
		console.error(e);
	} finally {
		chdir(_cwd);
	}
};

if (require.main === module) {
	void (async () => await main())();
}
