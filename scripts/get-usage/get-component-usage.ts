import { execSync } from 'child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { chdir } from 'process';
import { repos } from './config.json';
import type { ComponentUsageData } from './types';

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
	importedFrom: /^(@guardian\\/(((src-(?!foundations)).*)|(((source-(?!foundations)).*))))/,
	getComponentName: ({ imported, moduleName }) => {
		const parsedModuleName = moduleName.split("/").slice(0,2).join("/");
		return parsedModuleName + '/' + imported;
	},
	processors: [
		['count-components', { outputTo: '${name}.component-usage.json' }],
	],
};
`;

export const getComponentUsage = (): ComponentUsageData => {
	const componentUsage: ComponentUsageData = {};

	// Make a temp directory to clone all of the repos into
	mkdirSync('./tmp');
	chdir('./tmp');

	// For each repository, and each project within that repository
	// Get all of the components that are used
	for (const repo of repos) {
		execSync(`git clone --depth 1 git@github.com:guardian/${repo.repo}.git`);
		chdir(repo.repo);
		for (const project of repo.projects) {
			console.log(`Analysing ${project.name}`);
			const configFileName = `${project.name}.scan.config`;
			writeFileSync(configFileName, getReactScannerConfig(project));
			execSync(`../../node_modules/.bin/react-scanner -c ${configFileName}`);
			componentUsage[project.name] = JSON.parse(
				readFileSync(`${project.name}.component-usage.json`, 'utf-8'),
			);
		}
		chdir('../');
	}

	chdir('../');

	return componentUsage;
};
