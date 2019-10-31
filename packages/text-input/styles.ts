import { css } from "@emotion/core"
import { textSans, size, palette, space } from "@guardian/src-foundations"
import { focusHalo } from "@guardian/src-utilities"
import { lightTheme, TextInputTheme } from "./themes"

export const textInput = ({
	textInput,
}: { textInput: TextInputTheme } = lightTheme) => css`
	height: ${size.large}px;
	${textSans({ level: 3 })};
	color: ${textInput.inputColor};
	background-color: ${textInput.backgroundColor};
	border: 2px solid ${palette.neutral[60]};
	padding: 0 ${space[2]}px;
	margin-bottom: ${space[4]}px;

	&:focus {
		${focusHalo};
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
}: { textInput: TextInputTheme } = lightTheme) => css`
	${textSans({ level: 3 })};
	color: ${textInput.textColor};
	margin-bottom: ${space.half}px;
`

export const errorInput = css`
	border: 4px solid ${palette.error.main};
	color: ${palette.error.main};
`

export const optionalLabel = css`
	${textSans({ level: 2 })};
	color: ${palette.neutral[46]};
	font-style: italic;
`

export const supportingText = css`
	${textSans({ level: 2 })};
	color: ${palette.neutral[46]};
	margin-bottom: ${space.half}px;
`
