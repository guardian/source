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

	&:last-of-type {
		margin-bottom: 0;
	}
`

export const radio = css`
	@supports (appearance: none) {
		appearance: none;
		outline: 0;
		cursor: pointer;
		color: inherit;
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

export const text = css`
	position: relative;
	${textSans({ level: 3 })};
`

export const light = css`
	label {
		input {
			color: ${palette.neutral[60]};

			&:checked {
				color: ${palette.brand.main};
			}
		}

		span {
			color: ${palette.neutral[20]};
		}

		&:hover {
			input {
				border-color: ${palette.brand.main};
			}
		}
	}
`
export const dark = css`
	label {
		input {
			color: ${palette.brand.pastel};

			&:checked {
				color: ${palette.neutral[100]};
			}
		}

		span {
			color: ${palette.neutral[100]};
		}

		&:hover {
			input {
				border-color: ${palette.neutral[100]};
			}
		}
	}
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
