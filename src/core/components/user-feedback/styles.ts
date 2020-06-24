import { css } from "@emotion/core"
import { space } from "@guardian/src-foundations"
import {
	userFeedbackDefault,
	UserFeedbackTheme,
} from "@guardian/src-foundations/themes"
import { textSans } from "@guardian/src-foundations/typography"
import { width, height } from "@guardian/src-foundations/size"

const inlineMessage = css`
	/* we use flex purely for vertical centering */
	display: flex;
	align-items: flex-start;
	${textSans.medium({ lineHeight: "regular" })};
	/* TODO: we shouldn't be opinionated about layout inside the component */
	margin-bottom: ${space[1]}px;

	svg {
		fill: currentColor;
		/* we don't want the SVG to change size depending on available space */
		flex: none;
		width: ${width.iconMedium}px;
		height: ${height.iconMedium}px;
	}
`

export const inlineError = ({
	userFeedback,
}: { userFeedback: UserFeedbackTheme } = userFeedbackDefault) => css`
	${inlineMessage};
	color: ${userFeedback.textError};
`

export const inlineSuccess = ({
	userFeedback,
}: { userFeedback: UserFeedbackTheme } = userFeedbackDefault) => css`
	${inlineMessage};
	color: ${userFeedback.textSuccess};
`
