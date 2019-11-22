import { css } from "@emotion/core"
import { space } from "@guardian/src-foundations"
import {
	inlineErrorLight,
	InlineErrorTheme,
} from "@guardian/src-foundations/themes"
import { textSans } from "@guardian/src-foundations/typography"

export const inlineError = ({
	inlineError,
}: { inlineError: InlineErrorTheme } = inlineErrorLight) => css`
	display: flex;
	align-items: center;
	${textSans.medium()};
	color: ${inlineError.text};
	margin-bottom: ${space[1]}px;

	svg {
		fill: currentColor;
		width: 30px;
	}
`
