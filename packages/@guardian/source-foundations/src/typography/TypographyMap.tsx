import type { Category, FontScaleArgs, FontScaleFunction } from './types';

type FontFunctions = {
	[key in Category]: FontScaleFunction;
};

interface Props {
	fontName: string;
	fontStyles: FontFunctions;
	options: FontScaleArgs;
}

const listStyles = {
	margin: 0,
	listStyle: 'none',
};

export const TypographyMap = ({ fontName, fontStyles, options }: Props) => {
	return (
		<ul>
			{Object.entries(fontStyles).map(([name, getFontStyles]) => {
				const fontStyles = getFontStyles({ unit: 'px', ...options });

				return (
					<li key={name} style={{ ...fontStyles, ...listStyles }}>
						{fontName}.{name} {'->'} {fontStyles.fontSize}px
					</li>
				);
			})}
		</ul>
	);
};
