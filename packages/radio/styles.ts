import { css } from "@emotion/core"
import { space, size, transitions } from "@guardian/src-foundations"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"
import { RadioTheme, lightTheme } from "./themes"

export const group = css`
	display: flex;
	justify-content: flex-start;
`

export const label = ({ radio }: { radio: RadioTheme } = lightTheme) => css`
	cursor: pointer;
	display: flex;
	align-items: center;
	height: ${size.large}px;

	&:hover {
		input {
			border-color: ${radio.hoverBorderColor};
		}
	}
`

export const labelWithSupportingText = css`
	align-items: flex-start;
	margin-bottom: ${space[2]}px;
`

export const radio = ({ radio }: { radio: RadioTheme } = lightTheme) => css`
	cursor: pointer;
	box-sizing: border-box;
	display: inline-block;
	width: ${size.small}px;
	height: ${size.small}px;
	margin: 0 ${space[1]}px 0 0;

	border: 2px solid currentColor;
	border-radius: 50%;
	position: relative;
	transition: box-shadow ${transitions.short};
	transition-delay: 0.08s;

	color: ${radio.color};

	&:checked {
		color: ${radio.checkedColor};
	}

	&:focus {
		${focusHalo};
	}

	/*
	Take care: Emotion extracts @supports blocks and moves them below
	all other <style> elements, making these values hard to override.
	I have chosen to keep these styles in the @supports block as
	moving them out makes radio buttons look horrible on older browsers
	*/
	@supports (appearance: none) {
		appearance: none;

		&:after {
			background: currentColor;
			position: absolute;
			content: "";
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			border-radius: 50%;
			transform: scale(0);
			transform-origin: center;
			transition: transform ${transitions.short};
		}

		&:checked {
			&:after {
				transform: scale(0.6);
			}
		}
	}
`

export const labelText = ({ radio }: { radio: RadioTheme } = lightTheme) => css`
	${textSans.medium()};
	color: ${radio.textColor};
`

export const labelTextWithSupportingText = css`
	${textSans.medium({ fontWeight: "bold" })};
`

export const supportingText = ({
	radio,
}: { radio: RadioTheme } = lightTheme) => css`
	${textSans.medium()};
	color: ${radio.supportingTextColor};
`

export const horizontal = css`
	flex-direction: row;

	label {
		margin-right: ${space[2]}px;
	}
`
export const vertical = css`
	flex-direction: column;
`

export const errorRadio = ({
	radio,
}: { radio: RadioTheme } = lightTheme) => css`
	border: 4px solid ${radio.errorColor};
`
