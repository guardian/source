import { css } from "@emotion/core"
import { space } from "@guardian/src-foundations"
import { height } from "@guardian/src-foundations/size"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"
import { selectDefault, SelectTheme } from "@guardian/src-foundations/themes"

export const errorInput = ({
	select,
}: { select: SelectTheme } = selectDefault) => css`
	border: 4px solid ${select.borderError};
	color: ${select.textError};
`

export const successInput = ({
	select,
}: { select: SelectTheme } = selectDefault) => css`
	border: 4px solid ${select.borderSuccess};
	color: ${select.textSuccess};
`

export const select = ({
	select,
}: { select: SelectTheme } = selectDefault) => css`
	box-sizing: border-box;
	height: ${height.inputMedium}px;
	width: 100%;
	${textSans.medium({ lineHeight: "regular" })};
	color: ${select.textUserInput};
	background-color: ${select.backgroundInput};
	border: 2px solid ${select.border};
	padding: 0 ${space[2]}px;

	&:active {
		border: 2px solid ${select.borderActive};
	}

	&:focus {
		${focusHalo};
	}

	&:invalid {
		${errorInput({ select })};
	}
`

export const label = ({
	select,
}: { select: SelectTheme } = selectDefault) => css`
	${textSans.medium({ fontWeight: "bold", lineHeight: "regular" })};
	color: ${select.textLabel};
	margin-bottom: ${space[1]}px;
`

export const optionalLabel = ({
	select,
}: { select: SelectTheme } = selectDefault) => css`
	${textSans.small({ lineHeight: "regular" })};
	color: ${select.textLabelOptional};
	font-style: italic;
`

export const supportingText = ({
	select,
}: { select: SelectTheme } = selectDefault) => css`
	${textSans.small({ lineHeight: "regular" })};
	color: ${select.textLabelSupporting};
	margin-bottom: ${space[1]}px;
`
