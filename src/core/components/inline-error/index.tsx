import React, { ReactNode } from "react"
import { SvgAlert } from "@guardian/src-icons"
import { Props } from "@guardian/src-helpers"
import { inlineError } from "./styles"
export {
	inlineErrorDefault,
	inlineErrorBrand,
} from "@guardian/src-foundations/themes"

interface InlineErrorProps extends Props {
	children: ReactNode
}

const InlineError = ({ children, cssOverrides }: InlineErrorProps) => (
	<span
		css={(theme) => [inlineError(theme.inlineError && theme), cssOverrides]}
	>
		<SvgAlert />
		{children}
	</span>
)

export { InlineError }
