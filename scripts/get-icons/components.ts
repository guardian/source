import { writeFileSync } from 'fs';
import { kebabToTitle } from './case';
import { REACT_COMPONENT_OUTPUT_DIR } from './config';

export const generateReactComponent = (name: string, svg: string): string => {
	return `import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const ${name}Icon = ({ size }: IconProps): EmotionJSX.Element => {
	return (
${replaceStyleAttribute(
	svg
		.split('\n')
		.map((line) => `\t\t${line}`)
		.join('\n')
		.replace(/\\>/i, '\twidth={size ? iconSize[size] : undefined}\n\t\t>')
		.replace(/fill-rule/gi, 'fillRule')
		.replace(/clip-rule/gi, 'clipRule'),
)}
	);
};
`;
};

const replaceStyleAttribute = (source: string): string => {
	const matches = source.matchAll(/style=".*"/gi);
	for (const match of matches) {
		const value = match.toString();
		const replacement = getStyleReplacement(value);
		source = source.replace(value, replacement);
	}
	return source;
};

const getStyleReplacement = (style: string): string => {
	return style
		.replace('style=', '')
		.replace(/\\"/gi, '')
		.split(';')
		.map((item) => {
			const [key, value] = item.split(':');
			return `${key}="${value}"`;
		})
		.join('\n\t\t');
};

export const _ = { replaceStyleAttribute, getStyleReplacement };

export const writeComponentsIndex = (nodeNames: string[]): void => {
	const typeExport = `export type { IconProps, IconSize } from '../types';`;
	const componentExports = nodeNames.sort().map((name) => {
		const iconName = `${kebabToTitle(name)}Icon`;
		return `export { ${iconName} } from './${iconName}';`;
	});

	writeFileSync(
		`${REACT_COMPONENT_OUTPUT_DIR}/index.ts`,
		`${typeExport}\n\n${componentExports.join('\n')}\n`,
	);
};
