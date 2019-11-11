import { css } from "@emotion/core"
import { size, palette, space } from "@guardian/src-foundations"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"
import { lightTheme, TextInputTheme } from "./themes"

export const textInput = ({
	textInput,
}: { textInput: TextInputTheme } = lightTheme) => css`
	height: ${size.large}px;
	${textSans.medium()};
	color: ${textInput.inputColor};
	background-color: ${textInput.backgroundColor};
	border: 2px solid ${palette.neutral[60]};
	padding: 0 ${space[2]}px;

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
	${textSans.medium()};
	color: ${textInput.textColor};
	margin-bottom: ${space[1]}px;
`

export const errorInput = css`
	border: 4px solid ${palette.error.main};
	color: ${palette.error.main};
`

export const optionalLabel = css`
	${textSans.small()};
	color: ${palette.neutral[46]};
	font-style: italic;
`

export const supportingText = css`
	${textSans.small()};
	color: ${palette.neutral[46]};
	margin-bottom: ${space[1]}px;
`
