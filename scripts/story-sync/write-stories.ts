import { v4StoriesDirectory } from './config';
import { join } from 'path';
import { writeFileSync } from 'fs';

const getStoryFileContents = (file: string, path: string) => {
	const pathWithoutExtension = path.replace('.tsx', '');
	const importPath = pathWithoutExtension.replace(
		'../../packages/@guardian/',
		'../../../',
	);
	return `import defaultStoryConfig from '${importPath}';

export default {
	...defaultStoryConfig,
	title: 'Source v4/source-react-components/${file.split('.')[0]}',
};

export * from '${importPath}';
`;
};

export const writeStories = (v3Stories: Record<string, string>) => {
	Object.entries(v3Stories).forEach(([file, path]) => {
		writeFileSync(
			join(v4StoriesDirectory, file),
			getStoryFileContents(file, path),
		);
	});
};
