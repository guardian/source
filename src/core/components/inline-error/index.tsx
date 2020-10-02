import React, { ReactNode } from "react"
import { SerializedStyles } from "@emotion/core"
import { SvgAlertTriangle } from "@guardian/src-icons"
import { Props } from "@guardian/src-helpers"
import { inlineError } from "./styles"
export {
	inlineErrorDefault,
	inlineErrorBrand,
} from "@guardian/src-foundations/themes"

interface InlineErrorProps extends Props {
	children: ReactNode
	cssOverrides?: SerializedStyles | SerializedStyles[]
}

const InlineError = ({ children, cssOverrides }: InlineErrorProps) => (
	<span
		css={(theme) => [inlineError(theme.inlineError && theme), cssOverrides]}
	>
		<SvgAlertTriangle />
		{children}
	</span>
)

export { InlineError }
