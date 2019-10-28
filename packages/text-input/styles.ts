import { css } from "@emotion/core"
import { textSans, size, palette } from "@guardian/src-foundations"
import { focusHalo } from "@guardian/src-utilities"
import { lightTheme, TextInputTheme } from "./themes"

export const textInput = ({
	textInput,
}: { textInput: TextInputTheme } = lightTheme) => css`
	height: ${size.large}px;
	${textSans({ level: 3 })};
	color: ${textInput.inputColor};

	&:focus {
		${focusHalo};
	}
`

export const textInputWide = css`
	width: 460px;
`

export const text = ({
	textInput,
}: { textInput: TextInputTheme } = lightTheme) => css`
	position: relative;
	${textSans({ level: 3 })};
	color: ${textInput.textColor};
`

export const errorInput = css`
	border: 4px solid ${palette.error.main};
`
