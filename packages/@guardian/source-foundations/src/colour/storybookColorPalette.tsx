import { css } from '@emotion/react';

/**
 * Copied from Storybook but using emotion rather than styled-components:
 * https://github.com/storybookjs/storybook/blob/7035ea7389393da041985ebc491ee58dedb50d06/code/lib/blocks/src/components/ColorPalette.tsx
 *
 */

const ItemTitleStyles = css`
	font-weight: 700;
	color: #333333;
	font-size: 14px;
`;

const ItemSubtitleStyles = css`
	color: grey;
`;

const ItemDescriptionStyles = css`
	flex: 0 0 30%;
	line-height: 1;
	margin-top: 5px;
`;

const SwatchLabelStyles = css`
	flex: 1;
	text-align: center;
	font-size: 12px;
	line-height: 1;
	overflow: hidden;
	color: #33333399;

	div {
		display: inline-block;
		overflow: hidden;
		max-width: 100%;
		text-overflow: ellipsis;
	}

	span: {
		display: block;
		margin-top: 2px;
	}
`;

const SwatchLabelsStyles = css`
	display: flex;
	flex-direction: row;
`;

const SwatchStyles = (background: string) => css`
	position: relative;
	flex: 1;

	&::before {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${background};
		content: '';
	}
`;

const SwatchColorsStyles = css`
	display: flex;
	flex-direction: row;
	height: 50px;
	margin-bottom: 5px;
	overflow: hidden;
	background-color: white;
	background-image: repeating-linear-gradient(
		-45deg,
		#ccc,
		#ccc 1px,
		#fff 1px,
		#fff 16px
	);
	background-clip: padding-box;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
`;

const SwatchSpecimenStyles = css`
	display: flex;
	flex-direction: column;
	flex: 1;
	position: relative;
	margin-bottom: 30px;
`;

const SwatchesStyles = css`
	flex: 1;
	display: flex;
	flex-direction: row;
`;

const ItemStyles = css`
	display: flex;
	align-items: flex-start;
`;

const ListNameStyles = css`
	flex: 0 0 30%;
`;

const ListSwatchesStyles = css`
	flex: 1;
`;

const ListHeadingStyles = css`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-bottom: 20px;
	font-weight: 700;
	color: #33333399;
	font-size: 14px;
`;

const ListStyles = css`
	font-size: 12px;
	line-height: 1;
	display: flex;
	flex-direction: column;
`;

type Colors = string[] | Record<string, string>;

interface ColorItemProps {
	title: string;
	subtitle: string;
	colors: Colors;
}

function renderSwatch(color: string, index: number) {
	return (
		<div css={SwatchStyles(color)} key={`${color} -${index} `} title={color} />
	);
}

function renderSwatchLabel(color: string, index: number) {
	return (
		<div css={SwatchLabelStyles} key={`${color} -${index} `} title={color}>
			<div>{color}</div>
		</div>
	);
}

function renderSwatchSpecimen(colors: Colors) {
	if (Array.isArray(colors)) {
		return (
			<div css={SwatchSpecimenStyles}>
				<div css={SwatchColorsStyles}>
					{colors.map((color, index) => renderSwatch(color, index))}
				</div>
				<div css={SwatchLabelsStyles}>
					{colors.map((color, index) => renderSwatchLabel(color, index))}
				</div>
			</div>
		);
	}
	return (
		<div css={SwatchSpecimenStyles}>
			<div css={SwatchColorsStyles}>
				{Object.values(colors).map((color, index) =>
					renderSwatch(color, index),
				)}
			</div>
			<div css={SwatchLabelsStyles}>
				{Object.keys(colors).map((color, index) =>
					renderSwatchLabel(color, index),
				)}
			</div>
		</div>
	);
}

/**
 * A single color row your styleguide showing title, subtitle and one or more colors, used
 * as a child of `ColorPalette`.
 */
export const ColorItem = ({ title, subtitle, colors }: ColorItemProps) => {
	return (
		<div css={ItemStyles}>
			<div css={ItemDescriptionStyles}>
				<div css={ItemTitleStyles}>{title}</div>
				<div css={ItemSubtitleStyles}>{subtitle}</div>
			</div>
			<div css={SwatchesStyles}>{renderSwatchSpecimen(colors)}</div>
		</div>
	);
};

interface ColorPaletteProps {
	children?: React.ReactNode;
}

/**
 * Styleguide documentation for colors, including names, captions, and color swatches,
 * all specified as `ColorItem` children of this wrapper component.
 */
export const ColorPalette = ({ children, ...props }: ColorPaletteProps) => (
	<div css={ListStyles} {...props}>
		<div css={ListHeadingStyles}>
			<div css={ListNameStyles}>Name</div>
			<div css={ListSwatchesStyles}>Swatches</div>
		</div>
		{children}
	</div>
);
