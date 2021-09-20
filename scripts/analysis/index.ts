import { repos } from './config.json';
import { cwd, chdir } from 'process';
import { execSync } from 'child_process';
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs';
import rimraf from 'rimraf';
import { getAllComponentsAndPackages } from './get-all-components';

const getReactScannerConfig = ({
	name,
	paths,
}: {
	name: string;
	paths: string;
}) => `
module.exports = {
	crawlFrom: '.',
	globs: ['**/(${paths})/**/!(*.test|*.spec).@(js|ts)?(x)'],
	includeSubComponents: true,
	importedFrom: /^(@guardian\\/(((src-(?!foundations)).*)|(source-react-components-development-kitchen)))/,
	getComponentName: ({ imported, moduleName }) => {
		return moduleName + '/' + imported;
	},
	processors: [
		['count-components', { outputTo: '${name}.component-usage.json' }],
	],
};
`;

const getStatsByComponent = (
	byPackage: Record<string, Record<string, number>>,
) => {
	const byComponent: Record<string, Record<string, number>> = {};
	Object.entries(byPackage).forEach(([pkg, components]) => {
		Object.entries(components).forEach(([component, number]) => {
			if (Object.keys(byComponent).includes(component)) {
				byComponent[component][pkg] = number;
			} else {
				byComponent[component] = {
					[pkg]: number,
				};
			}
		});
	});
	return byComponent;
};

const main = async () => {
	console.log('Running Source analysis ');
	const { componentsWithPackage } = await getAllComponentsAndPackages();

	// Get the current working directory so we can restore that at the end
	// If it's not the root source directory then fall over as the script won't work
	const _cwd = cwd();
	if (!_cwd.endsWith(`/source`)) {
		console.error('This command must be run from the source directory');
		process.exit(1);
	}

	try {
		chdir('./scripts/analysis');

		// The script cleans up after itself so if there's already a tmp directory it might have something
		// else in it which we don't want to delete
		if (existsSync('./tmp')) {
			throw new Error(
				`${cwd()}/tmp directory already exists. Please remove first.`,
			);
		}

		mkdirSync('./tmp');
		chdir('./tmp');

		const componentUsage: Record<string, Record<string, number>> = {};

		// For each repository, and each project within that repository
		// Get all of the components that are used
		for (const repo of repos) {
			execSync(
				`git clone --depth 1 git@github.com:guardian/${repo.repo}.git`,
			);
			chdir(repo.repo);
			for (const project of repo.projects) {
				console.log(`Analysing ${project.name}`);
				const configFileName = `${project.name}.scan.config`;
				writeFileSync(configFileName, getReactScannerConfig(project));
				execSync(
					`../../node_modules/.bin/react-scanner -c ${configFileName}`,
				);
				componentUsage[project.name] = JSON.parse(
					readFileSync(
						`${project.name}.component-usage.json`,
						'utf-8',
					),
				);
			}
			chdir('../');
		}

		chdir('../');

		console.log(`Deleting ${cwd()}/tmp`);
		rimraf.sync(`${cwd()}/tmp`);
		console.log(`Formatting data`);

		// Also get the data split by component
		const byComponent = getStatsByComponent(componentUsage);
		const usedComponents = Object.keys(byComponent);
		const data = {
			byProject: componentUsage,
			byComponent,
			unusedComponents: componentsWithPackage.filter(
				(c) => !usedComponents.includes(c),
			),
		};

		if (!existsSync('./results')) {
			mkdirSync('./results');
		}

		// Write out one JSON file
		writeFileSync('results/results.json', JSON.stringify(data, null, 2));
		writeFileSync(
			'results/results.csv',
			Object.entries(byComponent)
				.map(
					([component, packages]) =>
						`${component},${Object.values(packages).reduce(
							(a, b) => a + b,
							0,
						)}`,
				)
				.join('\n'),
		);
	} catch (e) {
		console.error(e);
	} finally {
		chdir(_cwd);
	}
};

if (require.main === module) {
	void (async () => await main())();
}
