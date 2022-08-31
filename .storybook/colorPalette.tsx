import React, { FunctionComponent } from 'react';
import { transparentize } from 'polished';
import { styled } from '@storybook/theming';
import { ResetWrapper } from '@storybook/components';

const ItemTitle = styled.div(({ theme }) => ({
	fontWeight: theme.typography.weight.bold,
	color: theme.color.defaultText,
}));

const ItemSubtitle = styled.div(({ theme }) => ({
	color:
		theme.base === 'light'
			? transparentize(0.2, theme.color.defaultText)
			: transparentize(0.6, theme.color.defaultText),
}));

const ItemDescription = styled.div({
	flex: '0 0 30%',
	lineHeight: '20px',
	marginTop: 5,
});

const SwatchLabel = styled.div(({ theme }) => ({
	flex: 1,
	textAlign: 'center',
	fontFamily: theme.typography.fonts.mono,
	fontSize: theme.typography.size.s1,
	lineHeight: 1,
	overflow: 'hidden',
	color:
		theme.base === 'light'
			? transparentize(0.4, theme.color.defaultText)
			: transparentize(0.6, theme.color.defaultText),

	'> div': {
		display: 'inline-block',
		overflow: 'hidden',
		maxWidth: '100%',
		textOverflow: 'ellipsis',
	},

	span: {
		display: 'block',
		marginTop: 2,
	},
}));

const SwatchLabels = styled.div({
	display: 'flex',
	flexDirection: 'row',
});

interface SwatchProps {
	background: string;
}

const Swatch = styled.div<SwatchProps>(({ background }) => ({
	position: 'relative',
	flex: 1,

	'&::before': {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		background,
		content: '""',
	},
}));

const SwatchColors = styled.div(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	height: 50,
	marginBottom: 5,
	overflow: 'hidden',
	backgroundColor: 'white',
	backgroundImage: `repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)`,
	backgroundClip: 'padding-box',
}));

const SwatchSpecimen = styled.div({
	display: 'flex',
	flexDirection: 'column',
	flex: 1,
	position: 'relative',
	marginBottom: 30,
});

const Swatches = styled.div({
	flex: 1,
	display: 'flex',
	flexDirection: 'row',
});

const Item = styled.div({
	display: 'flex',
	alignItems: 'flex-start',
});

const ListName = styled.div({
	flex: '0 0 30%',
});

const ListSwatches = styled.div({
	flex: 1,
});

const ListHeading = styled.div(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	paddingBottom: 20,
	fontWeight: theme.typography.weight.bold,
	color:
		theme.base === 'light'
			? transparentize(0.4, theme.color.defaultText)
			: transparentize(0.6, theme.color.defaultText),
}));

const List = styled.div(({ theme }) => ({
	fontSize: theme.typography.size.s2,
	lineHeight: `20px`,

	display: 'flex',
	flexDirection: 'column',
}));

type Colors = string[] | { [key: string]: string };

interface ColorItemProps {
	title: string;
	subtitle: string;
	colors: Colors;
}

function renderSwatch(color: string, index: number) {
	return <Swatch key={`${color}-${index}`} title={color} background={color} />;
}

function renderSwatchLabel(color: string, index: number, colorDescription?: string) {
	return (
		<SwatchLabel key={`${color}-${index}`} title={color}>
			<div>
				{color}
				{colorDescription && <span>{colorDescription}</span>}
			</div>
		</SwatchLabel>
	);
}

function renderSwatchSpecimen(colors: Colors) {
	if (Array.isArray(colors)) {
		return (
			<SwatchSpecimen>
				<SwatchColors>{colors.map((color, index) => renderSwatch(color, index))}</SwatchColors>
				<SwatchLabels>{colors.map((color, index) => renderSwatchLabel(color, index))}</SwatchLabels>
			</SwatchSpecimen>
		);
	}
	return (
		<SwatchSpecimen>
			<SwatchColors>
				{Object.values(colors).map((color, index) => renderSwatch(color, index))}
			</SwatchColors>
			<SwatchLabels>
				{Object.keys(colors).map((color, index) => renderSwatchLabel(color, index, colors[color]))}
			</SwatchLabels>
		</SwatchSpecimen>
	);
}

/**
 * A single color row your styleguide showing title, subtitle and one or more colors, used
 * as a child of `ColorPalette`.
 */
export const ColorItem: FunctionComponent<ColorItemProps> = ({ title, subtitle, colors }) => {
	return (
		<Item>
			<ItemDescription>
				<ItemTitle>{title}</ItemTitle>
				<ItemSubtitle>{subtitle}</ItemSubtitle>
			</ItemDescription>
			<Swatches>{renderSwatchSpecimen(colors)}</Swatches>
		</Item>
	);
};

interface ColorPaletteProps {
	children?: React.ReactNode;
}

/**
 * Styleguide documentation for colors, including names, captions, and color swatches,
 * all specified as `ColorItem` children of this wrapper component.
 */
export const ColorPalette: FunctionComponent<ColorPaletteProps> = ({ children, ...props }) => (
	<ResetWrapper>
		<List {...props} className="docblock-colorpalette">
			<ListHeading>
				<ListName>Name</ListName>
				<ListSwatches>Swatches</ListSwatches>
			</ListHeading>
			{children}
		</List>
	</ResetWrapper>
);
