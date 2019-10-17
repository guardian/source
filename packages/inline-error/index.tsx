import React, { ReactNode } from "react"
import { inlineError } from "./styles"
import { SvgAlert } from "@guardian/src-svgs"

const InlineError = ({ children }: { children: ReactNode }) => (
	<span css={inlineError}>
		<SvgAlert />
		{children}
	</span>
)

export { InlineError }
