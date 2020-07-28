import React, { ReactNode } from "react"
import { SerializedStyles } from "@emotion/css"
import { SvgAlert, SvgTickRound } from "@guardian/src-icons"
import { Props } from "@guardian/src-helpers"
import { inlineError, inlineSuccess } from "./styles"
export {
	userFeedbackDefault,
	userFeedbackBrand,
} from "@guardian/src-foundations/themes"

interface UserFeedbackProps extends Props {
	cssOverrides?: SerializedStyles | SerializedStyles[]
	children: ReactNode
}

const InlineError = ({ children, cssOverrides }: UserFeedbackProps) => (
	<span
		css={(theme) => [
			inlineError(theme.userFeedback && theme),
			cssOverrides,
		]}
	>
		<SvgAlert />
		{children}
	</span>
)

const InlineSuccess = ({ children, cssOverrides }: UserFeedbackProps) => (
	<span
		css={(theme) => [
			inlineSuccess(theme.userFeedback && theme),
			cssOverrides,
		]}
	>
		<SvgTickRound />
		{children}
	</span>
)

export { InlineError, InlineSuccess }
