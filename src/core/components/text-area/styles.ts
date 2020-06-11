import { css } from "@emotion/core"
import { space } from "@guardian/src-foundations"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"
import { text, border, background } from "@guardian/src-foundations/palette"

export const errorInput = css`
	border: 4px solid ${border.error};
	color: ${text.error};
`

export const textArea = css`
	box-sizing: border-box;
	${textSans.medium()};
	color: ${text.userInput};
	background-color: ${background.input};
	border: 2px solid ${border.input};
	padding: 0 ${space[2]}px;

	&:active {
		border: 2px solid ${border.inputActive};
	}

	&:focus {
		${focusHalo};
	}

	&:invalid {
		${errorInput};
	}
`

export const widthFluid = css`
	width: 100%;
`

export const label = css`
	${textSans.medium({ fontWeight: "bold" })};
	color: ${text.inputLabel};
	margin-bottom: ${space[1]}px;
`

export const optionalLabel = css`
	${textSans.small()};
	color: ${text.inputLabelSupporting};
	font-style: italic;
`

export const supportingText = css`
	${textSans.small()};
	color: ${text.inputLabelSupporting};
	margin-bottom: ${space[1]}px;
`
