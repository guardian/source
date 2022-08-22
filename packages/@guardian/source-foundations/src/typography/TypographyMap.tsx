import type { Category, FontScaleArgs, FontScaleFunction } from './types';

type FontFunctions = {
	[key in Category]: FontScaleFunction;
};

interface Props {
	fontName: string;
	fontStyles: FontFunctions;
	options: FontScaleArgs;
}

export const TypographyMap = ({ fontName, fontStyles, options }: Props) => {
	return Object.entries(fontStyles).map(([name, getFontStyles]) => {
		const fontStyles = getFontStyles({ unit: 'px', ...options });

		return (
			<div key={name}>
				<h1 style={{ ...fontStyles }}>
					{fontName}.{name} {'->'} {fontStyles.fontSize}px
				</h1>
			</div>
		);
	});
};
