import { css } from "@emotion/core"
import { textSans, palette, size } from "@guardian/src-foundations"
import { focusHalo } from "@guardian/src-utilities"

export const textInput = css`
	height: ${size.large}px;
	${textSans({ level: 3 })};

	&:focus {
		${focusHalo};
	}
`

export const textInputWide = css`
	width: 460px;
`

export const text = css`
	position: relative;
	${textSans({ level: 3 })};
`

export const light = css`
	input {
		color: ${palette.neutral[7]};
	}

	span {
		color: ${palette.neutral[20]};
	}
`
export const dark = css`
	input {
		color: ${palette.brand.pastel};
	}

	span {
		color: ${palette.neutral[100]};
	}
`
