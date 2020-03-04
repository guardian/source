import React, { ReactNode } from "react"
import { SvgAlert } from "@guardian/src-svgs"
import { Props } from "@guardian/src-helpers"
import { inlineError } from "./styles"
export {
	inlineErrorLight,
	inlineErrorBrand,
} from "@guardian/src-foundations/themes"

interface InlineErrorProps extends Props {
	children: ReactNode
}

const InlineError = ({ children, cssOverrides }: InlineErrorProps) => (
	<span
		css={theme => [inlineError(theme.inlineError && theme), cssOverrides]}
	>
		<SvgAlert />
		{children}
	</span>
)

export { InlineError }
