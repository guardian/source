import {
	bodyObjectStyles,
	headlineObjectStyles,
	textSansObjectStyles,
} from '..';
import { fontWeightMapping, lineHeightMapping } from './data';
import type {
	Category,
	FontScaleFunction,
	FontWeight,
	LineHeight,
} from './types';

type FontFunctions = {
	[key in Category]: FontScaleFunction;
};

interface Props {
	fontName: string;
	fontStyles: FontFunctions;
}

const listStyles = {
	margin: 0,
	listStyle: 'none',
};

export const FontStylesRenderer = ({ fontName, fontStyles }: Props) => {
	return (
		<ul>
			{Object.entries(fontStyles).map(([name, getFontStyles]) => {
				const fontStyles = getFontStyles({ unit: 'px' });
				console.log(fontStyles);
				return (
					<li key={name} style={{ ...fontStyles, ...listStyles }}>
						{fontName}.{name} {'->'} {fontStyles.fontSize}px
					</li>
				);
			})}
		</ul>
	);
};

export const LineHeightRenderer = () => (
	<ul>
		{Object.entries(lineHeightMapping).map(([lineHeight, value]) => (
			<li
				key={value}
				style={{
					...headlineObjectStyles.xxsmall({
						lineHeight: lineHeight as LineHeight,
					}),
					margin: 0,
				}}
			>
				{lineHeight} {'->'} {value}
			</li>
		))}
	</ul>
);

export const FontWeightRenderer = () => (
	<ul>
		{Object.entries(fontWeightMapping).map(([fontWeight, value]) => (
			<li
				key={value}
				style={{
					...headlineObjectStyles.xxsmall({
						fontWeight: fontWeight as FontWeight,
					}),
				}}
			>
				{fontWeight} {'->'} {value}
			</li>
		))}
	</ul>
);

export const ItalicsRenderer = () => (
	<ul>
		<li
			style={{
				...headlineObjectStyles.xxsmall({
					fontStyle: 'italic',
					fontWeight: 'light',
				}),
			}}
		>
			headline light
		</li>
		<li
			style={{
				...headlineObjectStyles.xxsmall({
					fontStyle: 'italic',
					fontWeight: 'medium',
				}),
			}}
		>
			headline medium
		</li>
		<li
			style={{
				...bodyObjectStyles.xsmall({
					fontStyle: 'italic',
					fontWeight: 'regular',
				}),
			}}
		>
			body regular
		</li>
		<li
			style={{
				...bodyObjectStyles.xsmall({
					fontStyle: 'italic',
					fontWeight: 'bold',
				}),
			}}
		>
			body bold
		</li>
		<li
			style={{
				...textSansObjectStyles.xsmall({
					fontStyle: 'italic',
					fontWeight: 'regular',
				}),
			}}
		>
			textSans regular
		</li>
	</ul>
);
