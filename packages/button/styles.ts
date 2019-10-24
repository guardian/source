import { css } from "@emotion/core"
import {
	textSans,
	size,
	focusHalo,
	transitions,
} from "@guardian/src-foundations"
import { lightTheme, ButtonTheme } from "./themes"

export const button = css`
	display: inline-flex;
	justify-content: space-between;
	${textSans({ level: 3, fontWeight: "bold" })};
	box-sizing: border-box;
	border: none;
	background: transparent;
	cursor: pointer;
	transition: ${transitions.medium};

	&:focus {
		${focusHalo};
	}
`

export const primary = ({
	button,
}: { button: ButtonTheme } = lightTheme) => css`
	background-color: ${button.primary.backgroundColor};
	color: ${button.primary.color};

	&:hover {
		background-color: ${button.primary.hoverBackgroundColor};
	}
`

export const secondary = ({
	button,
}: { button: ButtonTheme } = lightTheme) => css`
	background-color: ${button.secondary.backgroundColor};
	color: ${button.secondary.color};
	${button.secondary.borderColor
		? `border: 1px solid ${button.secondary.borderColor};`
		: ""}

	&:hover {
		background-color: ${button.secondary.hoverBackgroundColor};
	}
`

export const tertiary = ({
	button,
}: { button: ButtonTheme } = lightTheme) => css`
	padding: 0;
	background-color: ${button.tertiary.backgroundColor};
	color: ${button.tertiary.color};

	&:hover {
		text-decoration: underline;
	}
`

export const defaultSize = css`
	height: ${size.large}px;
	min-height: ${size.large}px;
	padding: 0 ${size.large / 2}px;
	border-radius: ${size.large / 2}px;
`

export const smallSize = css`
	height: ${size.medium}px;
	min-height: ${size.medium}px;
	padding: 0 ${size.medium / 2}px;
	border-radius: ${size.medium / 2}px;
`

export const iconDefault = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${size.large / 2}px;
		height: auto;
	}
`

export const iconSmall = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${size.medium / 2}px;
		height: auto;
	}
`

export const iconLeft = css`
	svg {
		margin: 0 ${-size.large / 8}px 0 ${size.large / 4}px;
	}
`

export const iconRight = css`
	flex-direction: row-reverse;
	svg {
		margin: 0 ${size.large / 4}px 0 ${-size.large / 8}px;
	}
`

export const iconOnlyDefault = css`
	width: ${size.large}px;
	justify-content: center;
`

export const iconOnlySmall = css`
	width: ${size.medium}px;
	justify-content: center;
`
