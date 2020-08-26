import React, { ReactNode, HTMLAttributes } from "react"
import { SerializedStyles } from "@emotion/css"
import { SvgAlert, SvgTickRound } from "@guardian/src-icons"
import { Props } from "@guardian/src-helpers"
import { inlineError, inlineSuccess } from "./styles"
export {
	userFeedbackDefault,
	userFeedbackBrand,
} from "@guardian/src-foundations/themes"

interface UserFeedbackProps extends Props, HTMLAttributes<HTMLSpanElement> {
	cssOverrides?: SerializedStyles | SerializedStyles[]
	children: ReactNode
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
		<SvgAlert />
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
