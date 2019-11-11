import { css } from "@emotion/core"
import { space } from "@guardian/src-foundations"
import { textSans } from "@guardian/src-foundations/typography"
import { lightTheme, InlineErrorTheme } from "./themes"

export const inlineError = ({
	inlineError,
}: { inlineError: InlineErrorTheme } = lightTheme) => css`
	display: flex;
	align-items: center;
	${textSans.medium()};
	color: ${inlineError.color};
	margin-bottom: ${space[1]}px;

	svg {
		fill: currentColor;
		width: 30px;
	}
`
