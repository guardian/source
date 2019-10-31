import { css } from "@emotion/core"
import { textSans, space } from "@guardian/src-foundations"
import { lightTheme, InlineErrorTheme } from "./themes"

export const inlineError = ({
	inlineError,
}: { inlineError: InlineErrorTheme } = lightTheme) => css`
	display: flex;
	align-items: center;
	${textSans({ level: 3 })};
	color: ${inlineError.color};
	margin-bottom: ${space[1]}px;

	svg {
		fill: currentColor;
		width: 30px;
	}
`
