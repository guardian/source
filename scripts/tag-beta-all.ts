import execa from 'execa';
import { version } from '../package.json';
import { packageNames, getComponentPackageNames } from './package-names';

const tag = (packageName: string) => {
	return execa('yarn', ['tag', 'add', `${packageName}@${version}`, 'beta'], {
		stdio: 'inherit',
	});
};

const { foundations, icons, brand, helpers, editorial } = packageNames;

const packages = getComponentPackageNames().then((ps) =>
	ps.concat([foundations, icons, brand, helpers, editorial]),
);

packages.then((ps) => {
	ps.forEach((packageName) => {
		if (!packageName) return;

		tag(packageName).catch((err) =>
			console.log('Error tagging packages:', err),
		);
	});
});
