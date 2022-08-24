import React from 'react';
import {
	bodyObjectStyles,
	headlineObjectStyles,
	textSansObjectStyles,
} from '@guardian/source-foundations/src';
import { fontWeightMapping, lineHeightMapping } from '@guardian/source-foundations/src/typography/data';
import type {
	Category,
	FontScaleFunction,
	FontWeight,
	LineHeight,
} from '@guardian/source-foundations/src/typography/types';

type FontFunctions = {
	[key in Category]: FontScaleFunction;
};

interface Props {
	fontName: string;
	fontStyles: FontFunctions;
}

export const FontStylesRenderer = ({ fontName, fontStyles }: Props) => {
	return (
		<ul>
			{Object.entries(fontStyles).map(([name, getFontStyles]) => {
				const fontStyles = getFontStyles({ unit: 'px' });

				return (
					<li key={name} style={{ ...fontStyles }}>
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
