import { css } from "@emotion/core"
import { space } from "@guardian/src-foundations"
import { textSans } from "@guardian/src-foundations/typography"
import { LabelTheme, labelDefault } from "@guardian/src-foundations/themes"

export const labelText = ({
	label,
}: { label: LabelTheme } = labelDefault) => css`
	${textSans.medium({ fontWeight: "bold", lineHeight: "regular" })};
	color: ${label.textLabel};
	margin-bottom: ${space[1]}px;
`

export const optionalText = ({
	label,
}: { label: LabelTheme } = labelDefault) => css`
	${textSans.small({ lineHeight: "regular" })};
	color: ${label.textOptional};
	font-style: italic;
`

export const supportingText = ({
	label,
}: { label: LabelTheme } = labelDefault) => css`
	${textSans.small({ lineHeight: "regular" })};
	color: ${label.textSupporting};
	margin-bottom: ${space[1]}px;
`
