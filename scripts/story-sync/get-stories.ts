import { readdirSync } from 'fs';
import { join } from 'path';
import { guardianPackagesDirectory, v4StoriesDirectory } from './config';

const getStoryFilesInDirectory = (dir: string) => {
	let stories: Record<string, string> = {};

	readdirSync(dir, { withFileTypes: true }).forEach((item) => {
		if (item.name.endsWith('.stories.tsx'))
			stories[item.name] = join(dir, item.name);
		else if (item.isDirectory())
			stories = {
				...stories,
				...getStoryFilesInDirectory(join(dir, item.name)),
			};
	});

	return stories;
};

export const getV3Stories = () => {
	const srcPackages = readdirSync(guardianPackagesDirectory)
		.filter((pkg) => pkg.startsWith('src-'))
		.reduce(
			(stories, component) =>
				(stories = {
					...stories,
					...getStoryFilesInDirectory(
						join(guardianPackagesDirectory, component),
					),
				}),
			{},
		);

	return srcPackages;
};

export const getV4Stories = () => {
	return readdirSync(v4StoriesDirectory).sort();
};
