import { css } from "@emotion/core"
import { size, space } from "@guardian/src-foundations"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"
import {
	textInputLight,
	TextInputTheme,
} from "@guardian/src-foundations/themes"

export const errorInput = ({
	textInput,
}: { textInput: TextInputTheme } = textInputLight) => css`
	border: 4px solid ${textInput.borderError};
	color: ${textInput.textError};
`

export const textInput = ({
	textInput,
}: { textInput: TextInputTheme } = textInputLight) => css`
	box-sizing: border-box;
	height: ${size.medium}px;
	${textSans.medium()};
	color: ${textInput.textUserInput};
	background-color: ${textInput.backgroundInput};
	border: 2px solid ${textInput.border};
	padding: 0 ${space[2]}px;

	&:active {
		border: 2px solid ${textInput.borderActive};
	}

	&:focus {
		${focusHalo};
	}

	&:invalid {
		${errorInput({ textInput })};
	}
`

export const widthFluid = css`
	width: 100%;
`

export const width30 = css`
	width: 40ex;
	max-width: 100%; /* prevent overflow on narrow viewports */
`

export const width10 = css`
	width: 18ex;
`

export const width4 = css`
	width: 9ex;
`

export const text = ({
	textInput,
}: { textInput: TextInputTheme } = textInputLight) => css`
	${textSans.medium({ fontWeight: "bold" })};
	color: ${textInput.textLabel};
	margin-bottom: ${space[1]}px;
`

export const optionalLabel = ({
	textInput,
}: { textInput: TextInputTheme } = textInputLight) => css`
	${textSans.small()};
	color: ${textInput.textLabelOptional};
	font-style: italic;
`

export const supportingText = ({
	textInput,
}: { textInput: TextInputTheme } = textInputLight) => css`
	${textSans.small()};
	color: ${textInput.textLabelSupporting};
	margin-bottom: ${space[1]}px;
`
