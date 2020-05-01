import { css } from "@emotion/core"
import { size, space, transitions } from "@guardian/src-foundations"
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

export const defaultSize = css`
	${textSans.medium({ fontWeight: "bold" })};
	height: ${size.medium}px;
	min-height: ${size.medium}px;
	padding: 0 ${size.medium / 2}px;
	border-radius: ${size.medium / 2}px;
`

export const smallSize = css`
	${textSans.medium({ fontWeight: "bold" })};
	height: ${size.small}px;
	min-height: ${size.small}px;
	padding: 0 ${size.small / 2}px;
	border-radius: ${size.small / 2}px;
`

export const xsmallSize = css`
	${textSans.small({ fontWeight: "bold" })};
	height: ${size.xsmall}px;
	min-height: ${size.xsmall}px;
	padding: 0 ${size.xsmall / 2}px;
	border-radius: ${size.xsmall / 2}px;
`

export const iconDefault = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${size.medium / 2}px;
		height: auto;
	}
`

export const iconSmall = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${size.small / 2}px;
		height: auto;
	}
`

export const iconXsmall = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${size.xsmall / 2}px;
		height: auto;
	}
`

export const iconRight = css`
	svg {
		margin: 0 ${-size.medium / 8}px 0 ${size.medium / 4}px;
	}
`

export const iconLeft = css`
	flex-direction: row-reverse;
	svg {
		margin: 0 ${size.medium / 4}px 0 ${-size.medium / 8}px;
	}
`

export const iconOnlyDefault = css`
	width: ${size.medium}px;
	justify-content: center;
`

export const iconOnlySmall = css`
	width: ${size.small}px;
	justify-content: center;
`

export const iconOnlyXsmall = css`
	width: ${size.xsmall}px;
	justify-content: center;
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
