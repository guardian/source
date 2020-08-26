import { css } from "@emotion/core"
import { textSans } from "@guardian/src-foundations/typography"
import { LabelTheme, labelDefault } from "@guardian/src-foundations/themes"

export const labelText = ({
	label,
}: { label: LabelTheme } = labelDefault) => css`
	${textSans.medium({ fontWeight: "bold", lineHeight: "regular" })};
	color: ${label.textLabel};
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
`
