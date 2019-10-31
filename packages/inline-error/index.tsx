import React, { ReactNode } from "react"
import { inlineError } from "./styles"
import { SvgAlert } from "@guardian/src-svgs"
export * from "./themes"

const InlineError = ({ children }: { children: ReactNode }) => (
	<span css={theme => inlineError(theme.inlineError && theme)}>
		<SvgAlert />
		{children}
	</span>
)

export { InlineError }
