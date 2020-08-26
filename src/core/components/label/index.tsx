import React, { ReactNode, LabelHTMLAttributes } from "react"
import { SerializedStyles } from "@emotion/core"
import { InlineError, InlineSuccess } from "@guardian/src-user-feedback"
import { descriptionId } from "@guardian/src-foundations/accessibility"
import { labelText, optionalText, supportingText } from "./styles"
import { Props } from "@guardian/src-helpers"
export { labelDefault, labelBrand } from "@guardian/src-foundations/themes"

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
		<div css={(theme) => supportingText(theme.label && theme)}>
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
	htmlFor,
	cssOverrides,
	children,
}: LabelProps) => {
	const contents = (
		<>
			<span css={(theme) => labelText(theme.label && theme)}>
				{text}{" "}
				{optional ? (
					<span css={(theme) => optionalText(theme.label && theme)}>
						Optional
					</span>
				) : (
					""
				)}
			</span>
			{supporting ? <SupportingText>{supporting}</SupportingText> : ""}
			{error && (
				<InlineError id={htmlFor ? descriptionId(htmlFor) : ""}>
					{error}
				</InlineError>
			)}
			{!error && success && (
				<InlineSuccess id={htmlFor ? descriptionId(htmlFor) : ""}>
					{success}
				</InlineSuccess>
			)}
			{children}
		</>
	)

	if (as === "legend") {
		return <legend css={cssOverrides}>{contents}</legend>
	}

	return (
		<label css={cssOverrides} htmlFor={htmlFor}>
			{contents}
		</label>
	)
}

const defaultProps = { optional: false, as: "label" }

Label.defaultProps = { ...defaultProps }

export { Label }
