import execa from 'execa';
import { paths } from './paths';

const { kitchen } = paths;

console.log('Publishing @guardian/source-react-components-development-kitchen');

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
