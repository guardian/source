import React, { ReactNode, LabelHTMLAttributes } from "react"
import { SerializedStyles } from "@emotion/core"
import { InlineError, InlineSuccess } from "@guardian/src-user-feedback"
import { labelText, optionalText, supportingText } from "./styles"
import { Props } from "@guardian/src-helpers"

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>, Props {
	text: string
	supporting?: string
	error?: string
	success?: string
	as: "label" | "legend"
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
	as,
	cssOverrides,
	children,
}: LabelProps) => {
	const contents = (
		<>
			<span css={(theme) => labelText(theme.textInput && theme)}>
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
			</span>
			{supporting ? <SupportingText>{supporting}</SupportingText> : ""}
			{error && <InlineError>{error}</InlineError>}
			{!error && success && <InlineSuccess>{success}</InlineSuccess>}
			{children}
		</>
	)

	if (as === "legend") {
		return <legend css={cssOverrides}>{contents}</legend>
	}

	return <label css={cssOverrides}>{contents}</label>
}

const defaultProps = { optional: false, as: "label" }

Label.defaultProps = { ...defaultProps }

export { Label }
