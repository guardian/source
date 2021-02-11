import { css } from '@emotion/react';
import { space, transitions } from '@guardian/src-foundations';
import { height, width } from '@guardian/src-foundations/size';
import { buttonDefault, ButtonTheme } from '@guardian/src-foundations/themes';
import { textSans } from '@guardian/src-foundations/typography';
import { focusHalo } from '@guardian/src-foundations/accessibility';

export const button = css`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	border: none;
	background: transparent;
	cursor: pointer;
	transition: ${transitions.medium};
	text-decoration: none;
	white-space: nowrap;

	&:focus {
		${focusHalo};
	}
`;

export const primary = ({
	button,
}: { button: ButtonTheme } = buttonDefault) => css`
	background-color: ${button.backgroundPrimary};
	color: ${button.textPrimary};

	&:hover {
		background-color: ${button.backgroundPrimaryHover};
	}
`;

export const secondary = ({
	button,
}: { button: ButtonTheme } = buttonDefault) => css`
	background-color: ${button.backgroundSecondary};
	color: ${button.textSecondary};

	&:hover {
		background-color: ${button.backgroundSecondaryHover};
	}
`;

export const tertiary = ({
	button,
}: { button: ButtonTheme } = buttonDefault) => css`
	color: ${button.textTertiary};
	border: 1px solid ${button.borderTertiary};

	&:hover {
		background-color: ${button.backgroundTertiaryHover};
	}
`;

export const subdued = ({
	button,
}: { button: ButtonTheme } = buttonDefault) => css`
	padding: 0;
	background-color: transparent;
	color: ${button.textSubdued};

	&:hover {
		text-decoration: underline;
	}

	/* Why is this zero? Because the default is to have rounded corners but here, when
	   there is only text, it is more natural to show a rectangle for the focus halo */
	border-radius: 0;
`;

/*
	Guardian Text Sans appears to be encoded with slightly more space above the lettering
	than below. We add a small amount of padding to the bottom of the button to ensure
	the button label is vertically centred visually.
	TODO: find a more scalable solution to this (see https://css-tricks.com/how-to-tame-line-height-in-css/)
*/
const fontSpacingVerticalOffset = css`
	padding-bottom: 2px;
`;

export const defaultSize = css`
	${textSans.medium({ fontWeight: 'bold' })};
	height: ${height.ctaMedium}px;
	min-height: ${height.ctaMedium}px;
	padding: 0 ${space[5]}px;
	border-radius: ${height.ctaMedium}px;
	${fontSpacingVerticalOffset};
`;

export const smallSize = css`
	${textSans.medium({ fontWeight: 'bold' })};
	height: ${height.ctaSmall}px;
	min-height: ${height.ctaSmall}px;
	padding: 0 ${space[4]}px;
	border-radius: ${height.ctaSmall}px;
	${fontSpacingVerticalOffset};
`;

export const xsmallSize = css`
	${textSans.small({ fontWeight: 'bold' })};
	height: ${height.ctaXsmall}px;
	min-height: ${height.ctaXsmall}px;
	padding: 0 ${space[3]}px;
	border-radius: ${height.ctaXsmall}px;
	${fontSpacingVerticalOffset};
`;

export const iconDefault = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${width.iconMedium}px;
		height: auto;
	}
	.src-button-space {
		width: ${space[3]}px;
	}
`;

export const iconSmall = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${width.iconSmall}px;
		height: auto;
	}
	.src-button-space {
		width: ${space[2]}px;
	}
`;

export const iconXsmall = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${width.iconXsmall}px;
		height: auto;
	}
	.src-button-space {
		width: ${space[1]}px;
	}
`;

/* TODO: we add some negative margin to icons to account for
 the extra space encoded into the SVG. We should consider removing
 or significantly reducing this space
 */
const pullIconTowardEdge = -space[1];

export const iconLeft = css`
	flex-direction: row-reverse;
	svg {
		margin-left: ${pullIconTowardEdge}px;
	}
`;
export const iconRight = css`
	svg {
		margin-right: ${pullIconTowardEdge}px;
	}
`;

const iconOnly = css`
	justify-content: center;
	padding: 0;
`;

export const iconOnlyDefault = css`
	${iconOnly};
	width: ${width.ctaMedium}px;
`;

export const iconOnlySmall = css`
	${iconOnly};
	width: ${width.ctaSmall}px;
`;

export const iconOnlyXsmall = css`
	${iconOnly};
	width: ${width.ctaXsmall}px;
`;

export const iconNudgeAnimation = css`
	svg {
		transform: translate(0, 0);
		transition: ${transitions.short};
	}
	&:hover,
	&:focus {
		svg {
			transform: translate(${space[1] / 2}px, 0);
		}
	}
`;
