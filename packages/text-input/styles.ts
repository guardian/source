import { css } from "@emotion/core"
import { textSans, palette, focusHalo } from "@guardian/src-foundations"

export const textInput = css`
	&:focus {
		${focusHalo};
	}
`

export const text = css`
	position: relative;
	${textSans({ level: 3 })};
`

export const light = css`
	input {
		color: ${palette.neutral[60]};
	}

	span {
		color: ${palette.neutral[20]};
	}

	&:hover {
		input {
			border-color: ${palette.brand.main};
		}
	}
`
export const dark = css`
	input {
		color: ${palette.brand.pastel};
	}

	span {
		color: ${palette.neutral[100]};
	}

	&:hover {
		input {
			border-color: ${palette.neutral[100]};
		}
	}
`
