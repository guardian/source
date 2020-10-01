import React from "react"
import { SerializedStyles } from "@emotion/css"
import { SvgAlertTriangle, SvgTickRound } from "@guardian/src-icons"
import { Props } from "@guardian/src-helpers"
import { inlineError, inlineSuccess } from "./styles"
export {
	userFeedbackDefault,
	userFeedbackBrand,
} from "@guardian/src-foundations/themes"

interface UserFeedbackProps extends Props, React.HTMLAttributes<HTMLSpanElement> {
	cssOverrides?: SerializedStyles | SerializedStyles[]
	children: React.ReactNode
}

const InlineError = ({
	children,
	cssOverrides,
	...props
}: UserFeedbackProps) => (
	<span
		css={(theme) => [
			inlineError(theme.userFeedback && theme),
			cssOverrides,
		]}
		{...props}
	>
		<SvgAlertTriangle />
		{children}
	</span>
)

const InlineSuccess = ({
	children,
	cssOverrides,
	...props
}: UserFeedbackProps) => (
	<span
		css={(theme) => [
			inlineSuccess(theme.userFeedback && theme),
			cssOverrides,
		]}
		{...props}
	>
		<SvgTickRound />
		{children}
	</span>
)

export { InlineError, InlineSuccess }
