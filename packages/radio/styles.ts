import { css } from "@emotion/core"
import {
	textSans,
	palette,
	space,
	size,
	focusHalo,
	transitions,
} from "@guardian/src-foundations"

export const group = css`
	display: flex;
	justify-content: flex-start;
`

export const label = css`
	cursor: pointer;
	display: flex;
	align-items: center;
	height: ${size.large}px;
`

export const labelWithSupportingText = css`
	align-items: flex-start;
	margin-bottom: ${space[3]}px;
`

export const radio = css`
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

export const labelText = css`
	${textSans({ level: 3 })};
`

export const labelTextWithSupportingText = css`
	${textSans({ level: 3, fontWeight: "bold" })};
`

export const supportingText = css`
	${textSans({ level: 3 })};
`

export const lightLabel = css`
	&:hover {
		input {
			border-color: ${palette.brand.main};
		}
	}
`
export const lightRadio = css`
	color: ${palette.neutral[60]};

	&:checked {
		color: ${palette.brand.main};
	}
`
export const lightText = css`
	color: ${palette.neutral[20]};
`

export const lightSupportingText = css`
	color: ${palette.neutral[46]};
`

export const darkLabel = css`
	&:hover {
		input {
			border-color: ${palette.neutral[100]};
		}
	}
`
export const darkRadio = css`
	color: ${palette.brand.pastel};

	&:checked {
		color: ${palette.neutral[100]};
	}
`
export const darkText = css`
	color: ${palette.neutral[100]};
`

export const darkSupportingText = css`
	color: ${palette.neutral[60]};
`

export const horizontal = css`
	flex-direction: row;

	label {
		margin-right: ${space[3]}px;
	}
`
export const vertical = css`
	flex-direction: column;
`

export const errorRadio = css`
	border: 4px solid ${palette.error.main};
`
