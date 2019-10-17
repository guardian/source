import { css } from "@emotion/core"
import { textSans, palette, space } from "@guardian/src-foundations"

export const inlineError = css`
	display: flex;
	align-items: center;
	${textSans({ level: 3 })};
	color: ${palette.error.main};
	margin-bottom: ${space[1]}px;

	svg {
		fill: currentColor;
		width: 30px;
	}
`
