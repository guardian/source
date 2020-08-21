import React, { ReactNode, HTMLAttributes } from "react"
import { SerializedStyles } from "@emotion/core"
import { InlineError, InlineSuccess } from "@guardian/src-user-feedback"
import { labelText, optionalText, supportingText } from "./styles"
import { Props } from "@guardian/src-helpers"

interface LabelProps extends HTMLAttributes<HTMLDivElement>, Props {
	text: string
	supporting?: string
	error?: string
	success?: string
	optional: boolean
	cssOverrides?: SerializedStyles | SerializedStyles[]
	children?: string
}

const SupportingText = ({ children }: { children: ReactNode }) => {
	return (
		<div css={(theme) => supportingText(theme.textInput && theme)}>
			{children}
		</div>
	)
}

const Label = ({
	text,
	supporting,
	error,
	success,
	optional,
	cssOverrides,
	children,
}: LabelProps) => {
	return (
		<label css={cssOverrides}>
			<div css={(theme) => labelText(theme.textInput && theme)}>
				{text}{" "}
				{optional ? (
					<span
						css={(theme) => optionalText(theme.textInput && theme)}
					>
						Optional
					</span>
				) : (
					""
				)}
			</div>
			{supporting ? <SupportingText>{supporting}</SupportingText> : ""}
			{error && <InlineError>{error}</InlineError>}
			{!error && success && <InlineSuccess>{success}</InlineSuccess>}
			{children}
		</label>
	)
}

const defaultProps = { optional: false }

Label.defaultProps = { ...defaultProps }

export { Label }
