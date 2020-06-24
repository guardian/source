import { css } from "@emotion/core"
import { space } from "@guardian/src-foundations"
import {
	inlineErrorLight,
	InlineErrorTheme,
} from "@guardian/src-foundations/themes"
import { textSans } from "@guardian/src-foundations/typography"
import { remWidth, remHeight } from "@guardian/src-foundations/size"

export const inlineError = ({
	inlineError,
}: { inlineError: InlineErrorTheme } = inlineErrorLight) => css`
	display: flex;
	align-items: flex-start;
	${textSans.medium({ lineHeight: "regular" })};
	color: ${inlineError.text};
	margin-bottom: ${space[1]}px;

	svg {
		fill: currentColor;
		width: ${remWidth.iconMedium}rem;
		height: ${remHeight.iconMedium}rem;

		/* a visual kick to vertically align the icon with the top row of text */
		transform: translateY(-3px);
	}
`
