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
	${textSans.medium({ lineHeight: "regular" })};
	color: ${text.userInput};
	background-color: ${background.input};
	border: 2px solid ${border.input};
	padding: ${space[2]}px ${space[2]}px 0 ${space[2]}px;

	&:active {
		border: 2px solid ${border.inputActive};
	}

	&:focus {
		${focusHalo};
	}

	&:invalid {
		/* reset UA styles (Firefox) */
		box-shadow: none;

		/*
		We automatically apply error styling to fields in an invalid state,
		but stop short of applying it to empty required fields.

		Note: the following class will only be applied to a controlled
		component: https://reactjs.org/docs/forms.html#controlled-components
		*/
		.src-has-value {
			${errorInput}
		}
	}
`

export const widthFluid = css`
	width: 100%;
`
