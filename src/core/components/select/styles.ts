import { css } from "@emotion/core"
import { space } from "@guardian/src-foundations"
import { height, width } from "@guardian/src-foundations/size"
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

export const errorChevron = ({
	select,
}: { select: SelectTheme } = selectDefault) => css`
	svg {
		fill: ${select.textError};
	}
`

export const successChevron = ({
	select,
}: { select: SelectTheme } = selectDefault) => css`
	svg {
		fill: ${select.textSuccess};
	}
`

export const selectWrapper = ({
	select,
}: { select: SelectTheme } = selectDefault) => css`
	position: relative;

	svg {
		display: none;
		position: absolute;
		right: ${space[3]}px;
		top: ${space[2]}px;
		width: ${width.iconMedium}px;
		height: ${height.iconMedium}px;
		fill: ${select.textUserInput};
		pointer-events: none;
	}
`

export const select = ({
	select,
}: { select: SelectTheme } = selectDefault) => css`
	color: ${select.textUserInput};
	box-sizing: border-box;
	height: ${height.inputMedium}px;
	width: 100%;
	${textSans.medium({ lineHeight: "regular" })};
	background-color: ${select.backgroundInput};
	border: 2px solid ${select.border};
	padding-left: ${space[2]}px;

	@supports (appearance: none) {
		appearance: none;
		padding-right: ${space[2]}px;

		& ~ svg {
			display: block;
		}
	}

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
