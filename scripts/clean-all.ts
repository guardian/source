import execa from 'execa';
import { paths, getComponentPaths } from './paths';

const { foundations, icons, brand, helpers, kitchen, sourceFoundations } =
	paths;

const clean = (dir: string) => {
	return execa('yarn', ['--cwd', `${dir}`, 'run', 'clean'], {
		stdio: 'inherit',
	});
};
[foundations, icons, brand, helpers, kitchen, sourceFoundations].forEach(
	(dir) => {
		clean(dir);
	},
);

getComponentPaths().then((paths) => {
	paths.forEach((path) => {
		if (path) clean(path);
	});
});
