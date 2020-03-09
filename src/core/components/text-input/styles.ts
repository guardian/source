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
	height: ${size.large}px;
	${textSans.medium()};
	color: ${textInput.textUserInput};
	background-color: ${textInput.backgroundInput};
	border: 2px solid ${textInput.border};
	padding: 0 ${space[2]}px;

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
	width: 30ch;
`

export const width10 = css`
	width: 10ch;
`

export const width4 = css`
	width: 4ch;
`

export const text = ({
	textInput,
}: { textInput: TextInputTheme } = textInputLight) => css`
	${textSans.medium()};
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
