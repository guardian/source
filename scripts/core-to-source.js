const globby = require('globby');
const path = require('path');
const fs = require('fs');

const cwd = path.resolve('src/core');

(async () => {
	const files = await globby('./**/*.(ts|tsx)', {
		cwd,
	});
	console.log(files);
	for (const file of files) {
		const contents = fs.readFileSync(path.resolve(cwd, file), 'utf8');

		const fixed = contents.replace(
			/'(@guardian\/(.*))'/g,
			(match, p1, p2) => {
				const [pkg, rest = ''] = p2.split('/');
				return `'${path.relative(
					path.resolve(cwd, path.dirname(file)),
					path.resolve(cwd, mappings[pkg], rest),
				)}'`;
			},
		);
		// fs.writeFileSync(path.resolve(cwd, file), fixed);
	}
})();

const mappings = {
	'src-foundations': 'foundations/src',
	'src-brand': 'brand',
	'src-accordion': 'components/accordion',
	'src-button': 'components/button',
	'src-checkbox': 'components/checkbox',
	'src-choice-card': 'components/choice-card',
	'src-footer': 'components/footer',
	'src-label': 'components/label',
	'src-layout': 'components/layout',
	'src-link': 'components/link',
	'src-radio': 'components/radio',
	'src-select': 'components/select',
	'src-text-area': 'components/text-area',
	'src-text-input': 'components/text-input',
	'src-user-feedback': 'components/user-feedback',
	'src-helpers': 'helpers',
	'src-icons': 'icons',
};
