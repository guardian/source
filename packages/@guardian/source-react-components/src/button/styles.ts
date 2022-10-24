import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	focusHaloSpaced,
	height,
	space,
	textSans,
	transitions,
	width,
} from '@guardian/source-foundations';
import type { Theme } from '../@types/Theme';
import type { ButtonTheme } from './theme';
import { buttonThemeDefault } from './theme';
import type {
	ButtonPriority,
	IconSide,
	SharedButtonProps,
	Size,
} from './types';

const button = css`
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

	:disabled {
		cursor: not-allowed;
	}

	&:focus {
		${focusHaloSpaced};
	}
`;

// Width of the loading spinner in pixels for each button size.
const loadingSpinnerSizes: Record<Size, number> = {
	xsmall: 16,
	small: 20,
	default: 24,
};

const applyButtonStylesToLoadingSpinner = (size: Size) => {
	return css`
		path,
		circle {
			transition: stroke ${transitions.medium};
			stroke: transparent;
		}
		path {
			stroke: currentColor;
		}
		svg {
			/*
		 * The loading spinner width has been specified as 24px in the design
		 * which falls outside of the icon sizes in source-foundations, so we
		 * override the width here.
		 */
			width: ${loadingSpinnerSizes[size]}px;
		}
	`;
};

const primary = (
	button: ButtonTheme = buttonThemeDefault.button,
): SerializedStyles => css`
	background-color: ${button.backgroundPrimary};
	color: ${button.textPrimary};

	&:hover {
		background-color: ${button.backgroundPrimaryHover};
	}
`;

const secondary = (
	button: ButtonTheme = buttonThemeDefault.button,
): SerializedStyles => css`
	background-color: ${button.backgroundSecondary};
	color: ${button.textSecondary};

	&:hover {
		background-color: ${button.backgroundSecondaryHover};
	}
`;

const tertiary = (
	button: ButtonTheme = buttonThemeDefault.button,
): SerializedStyles => css`
	color: ${button.textTertiary};
	border: 1px solid ${button.borderTertiary};

	&:hover {
		background-color: ${button.backgroundTertiaryHover};
	}
`;

const subdued = (
	button: ButtonTheme = buttonThemeDefault.button,
): SerializedStyles => css`
	padding: 0;
	background-color: transparent;
	color: ${button.textSubdued};
	text-decoration: underline;
	text-underline-offset: 4px;

	&:hover {
		text-decoration-thickness: 4px;
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

const defaultSize = css`
	${textSans.medium({ fontWeight: 'bold' })};
	height: ${height.ctaMedium}px;
	min-height: ${height.ctaMedium}px;
	padding: 0 ${space[5]}px;
	border-radius: ${height.ctaMedium}px;
	${fontSpacingVerticalOffset};
`;

const smallSize = css`
	${textSans.medium({ fontWeight: 'bold' })};
	height: ${height.ctaSmall}px;
	min-height: ${height.ctaSmall}px;
	padding: 0 ${space[4]}px;
	border-radius: ${height.ctaSmall}px;
	${fontSpacingVerticalOffset};
`;

const xsmallSize = css`
	${textSans.small({ fontWeight: 'bold' })};
	height: ${height.ctaXsmall}px;
	min-height: ${height.ctaXsmall}px;
	padding: 0 ${space[3]}px;
	border-radius: ${height.ctaXsmall}px;
	${fontSpacingVerticalOffset};
`;

const iconDefault = css`
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

const iconSmall = css`
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

const iconXsmall = css`
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

const iconLeft = css`
	flex-direction: row-reverse;
	svg {
		margin-left: ${pullIconTowardEdge}px;
	}
`;
const iconRight = css`
	svg {
		margin-right: ${pullIconTowardEdge}px;
	}
`;

const iconOnly = css`
	justify-content: center;
	padding: 0;
`;

const iconOnlyDefault = css`
	${iconOnly};
	width: ${width.ctaMedium}px;
`;

const iconOnlySmall = css`
	${iconOnly};
	width: ${width.ctaSmall}px;
`;

const iconOnlyXsmall = css`
	${iconOnly};
	width: ${width.ctaXsmall}px;
`;

const iconNudgeAnimation = css`
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

const priorities: {
	[key in ButtonPriority]: (button?: ButtonTheme) => SerializedStyles;
} = {
	primary,
	secondary,
	tertiary,
	subdued,
};

const iconSides: {
	[key in IconSide]: SerializedStyles;
} = {
	right: iconRight,
	left: iconLeft,
};

const sizes: {
	[key in Size]: SerializedStyles;
} = {
	default: defaultSize,
	small: smallSize,
	xsmall: xsmallSize,
};
const iconSizes: {
	[key in Size]: SerializedStyles;
} = {
	default: iconDefault,
	small: iconSmall,
	xsmall: iconXsmall,
};
const iconOnlySizes: {
	[key in Size]: SerializedStyles;
} = {
	default: iconOnlyDefault,
	small: iconOnlySmall,
	xsmall: iconOnlyXsmall,
};

export const buttonStyles =
	({
		priority = 'primary',
		size = 'default',
		icon: iconSvg,
		hideLabel,
		iconSide = 'left',
		nudgeIcon,
		cssOverrides,
		isLoading,
	}: SharedButtonProps) =>
	(
		theme: Theme,
	): Array<string | SerializedStyles | SerializedStyles[] | undefined> =>
		[
			button,
			sizes[size],
			priorities[priority](theme.button),
			iconSvg || isLoading ? iconSizes[size] : '',
			(iconSvg || isLoading) && !hideLabel ? iconSides[iconSide] : '',
			nudgeIcon ? iconNudgeAnimation : '',
			hideLabel ? iconOnlySizes[size] : '',
			isLoading ? applyButtonStylesToLoadingSpinner(size) : undefined,
			cssOverrides,
		];
