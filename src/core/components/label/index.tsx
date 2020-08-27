import React, { ReactNode, LabelHTMLAttributes, HTMLAttributes } from "react"
import { SerializedStyles } from "@emotion/core"
import { legend, labelText, optionalText, supportingText } from "./styles"
import { Props } from "@guardian/src-helpers"
export { labelDefault, labelBrand } from "@guardian/src-foundations/themes"

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>, Props {
	text: string
	supporting?: string
	optional: boolean
	cssOverrides?: SerializedStyles | SerializedStyles[]
	children?: string
}
interface LegendProps extends HTMLAttributes<HTMLLegendElement>, Props {
	text: string
	supporting?: string
	optional: boolean
	cssOverrides?: SerializedStyles | SerializedStyles[]
}

const SupportingText = ({ children }: { children: ReactNode }) => {
	return (
		<p css={(theme) => supportingText(theme.label && theme)}>{children}</p>
	)
}

const Text = ({ text, optional }: LabelProps) => (
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
)

const Legend = ({
	text,
	supporting,
	optional,
	cssOverrides,
	...props
}: LegendProps) => {
	return (
		<>
			<legend css={[legend, cssOverrides]} {...props}>
				<Text text={text} optional={optional} />
			</legend>
			{supporting ? <SupportingText>{supporting}</SupportingText> : ""}
		</>
	)
}

const Label = ({
	text,
	supporting,
	optional,
	cssOverrides,
	children,
	...props
}: LabelProps) => {
	return (
		<label css={cssOverrides} {...props}>
			<Text text={text} optional={optional} />
			{supporting ? <SupportingText>{supporting}</SupportingText> : ""}
			{children}
		</label>
	)
}

const defaultProps = { optional: false }

Label.defaultProps = { ...defaultProps }
Legend.defaultProps = { ...defaultProps }

export { Label, Legend }
