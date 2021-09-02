import execa from 'execa';
import { paths } from './paths';

const { kitchen } = paths;

console.log('Publishing @guardian/source-kitchen-react');

import(`${kitchen}/package.json`)
	.then(({ version }) => {
		return execa(
			'yarn',
			[
				'--cwd',
				`${kitchen}`,
				'run',
				'publish:public',
				'--new-version',
				version,
			],
			{
				stdio: 'inherit',
			},
		);
	})
	.catch((err) => {
		console.log('***PUBLISH FAILED***\n', err);
		process.exit(1);
	});
