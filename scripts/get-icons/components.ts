export const generateReactComponent = (name: string, svg: string): string => {
	return `import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const ${name}Icon = ({ size }: IconProps) => {
	return (
${replaceStyleAttribute(
	svg
		.split('\n')
		.map((line) => `\t\t${line}`)
		.join('\n')
		.replace(/\>/i, '\twidth={size ? iconSize[size] : undefined}\n\t\t>')
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
		.replace(/\"/gi, '')
		.split(';')
		.map((item) => {
			const [key, value] = item.split(':');
			return `${key}="${value}"`;
		})
		.join('\n\t\t');
};

export const _ = { replaceStyleAttribute, getStyleReplacement };
