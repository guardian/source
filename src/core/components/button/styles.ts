import { css } from "@emotion/core"
import { size, width  } from "@guardian/src-foundations/size"
import { space, transitions } from "@guardian/src-foundations"
import { buttonDefault, ButtonTheme } from "@guardian/src-foundations/themes"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"

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
`

export const primary = ({
	button,
}: { button: ButtonTheme } = buttonDefault) => css`
	background-color: ${button.backgroundPrimary};
	color: ${button.textPrimary};

	&:hover {
		background-color: ${button.backgroundPrimaryHover};
	}
`

export const secondary = ({
	button,
}: { button: ButtonTheme } = buttonDefault) => css`
	background-color: ${button.backgroundSecondary};
	color: ${button.textSecondary};

	&:hover {
		background-color: ${button.backgroundSecondaryHover};
	}
`

export const tertiary = ({
	button,
}: { button: ButtonTheme } = buttonDefault) => css`
	color: ${button.textTertiary};
	border: 1px solid ${button.borderTertiary};

	&:hover {
		background-color: ${button.backgroundTertiaryHover};
	}
`

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
`

/*
	Guardian Text Sans appears to be encoded with slightly more space above the lettering
	than below. We add a small amount of padding to the bottom of the button to ensure
	the button label is vertically centred visually.
	TODO: find a more scalable solution to this (see https://css-tricks.com/how-to-tame-line-height-in-css/)
*/
const fontSpacingVerticalOffset = css`
	.baseline-kick {
		position: relative;
		top: -1px;
	}
`

export const defaultSize = css`
	${textSans.medium({ fontWeight: "bold" })};
	height: ${size.medium}px;
	min-height: ${size.medium}px;
	padding: 0 ${space[5]}px;
	border-radius: ${size.medium}px;
	${fontSpacingVerticalOffset};
`

export const smallSize = css`
	${textSans.medium({ fontWeight: "bold" })};
	height: ${size.small}px;
	min-height: ${size.small}px;
	padding: 0 ${space[4]}px;
	border-radius: ${size.small}px;
	${fontSpacingVerticalOffset};
`

export const xsmallSize = css`
	${textSans.small({ fontWeight: "bold" })};
	height: ${size.xsmall}px;
	min-height: ${size.xsmall}px;
	padding: 0 ${space[3]}px;
	border-radius: ${size.xsmall}px;
	${fontSpacingVerticalOffset};
`

export const iconDefault = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${width.iconMedium}px;
		height: auto;
	}
	.spacer {
		width: ${space[3]}px;
	}
`

export const iconSmall = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${width.iconSmall}px;
		height: auto;
	}
	.spacer {
		width: ${space[2]}px;
	}
`

export const iconXsmall = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${width.iconXsmall}px;
		height: auto;
	}
	.spacer {
		width: ${space[1]}px;
	}
`
// TODO: fix viewBox in SVGs
export const iconRight = css`
`

export const iconLeft = css`
	flex-direction: row-reverse;
`
const iconOnly = css`
	justify-content: center;
	padding: 0;
`

export const iconOnlyDefault = css`
	${iconOnly};
	width: ${size.medium}px;
`

export const iconOnlySmall = css`
	${iconOnly};
	width: ${size.small}px;
`

export const iconOnlyXsmall = css`
	${iconOnly};
	width: ${size.xsmall}px;
`

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
`
