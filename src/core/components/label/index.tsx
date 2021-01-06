///<reference types="@emotion/react/types/css-prop" />
import React, { ReactNode, LabelHTMLAttributes, HTMLAttributes } from "react"
import { SerializedStyles, css } from "@emotion/react"
import { legend, labelText, optionalText, supportingText } from "./styles"
import { Props } from "@guardian/src-helpers"
export { labelDefault, labelBrand } from "@guardian/src-foundations/themes"
import { visuallyHidden as _visuallyHidden } from "@guardian/src-foundations/accessibility"

const visuallyHidden = css`
	${_visuallyHidden}
`

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>, Props {
	text: string
	supporting?: string
	optional: boolean
	hideLabel?: boolean
	cssOverrides?: SerializedStyles | SerializedStyles[]
	children?: ReactNode
}
interface LegendProps extends HTMLAttributes<HTMLLegendElement>, Props {
	text: string
	supporting?: string
	optional: boolean
	hideLabel?: boolean
	cssOverrides?: SerializedStyles | SerializedStyles[]
}

const SupportingText = ({
	hideLabel,
	children,
}: {
	hideLabel?: boolean
	children: ReactNode
}) => {
	return (
		<p
			css={(theme) => [
				supportingText(theme.label && theme),
				hideLabel ? visuallyHidden : "",
			]}
		>
			{children}
		</p>
	)
}

const Text = ({ text, optional, hideLabel }: LabelProps) => (
	<div
		css={(theme) => [
			labelText(theme.label && theme),
			hideLabel ? visuallyHidden : "",
		]}
	>
		{text}{" "}
		{optional ? (
			<span css={(theme) => optionalText(theme.label && theme)}>
				Optional
			</span>
		) : (
			""
		)}
	</div>
)

const Legend = ({
	text,
	supporting,
	optional,
	hideLabel,
	cssOverrides,
	...props
}: LegendProps) => {
	return (
		<>
			<legend css={[legend, cssOverrides]} {...props}>
				<Text text={text} optional={optional} hideLabel={hideLabel} />
			</legend>
			{supporting ? (
				<SupportingText hideLabel={hideLabel}>
					{supporting}
				</SupportingText>
			) : (
				""
			)}
		</>
	)
}

const Label = ({
	text,
	supporting,
	optional,
	hideLabel,
	cssOverrides,
	children,
	...props
}: LabelProps) => {
	return (
		<label css={cssOverrides} {...props}>
			<Text hideLabel={hideLabel} text={text} optional={optional} />
			{supporting ? (
				<SupportingText hideLabel={hideLabel}>
					{supporting}
				</SupportingText>
			) : (
				""
			)}
			{children}
		</label>
	)
}

const defaultProps = { optional: false }

Label.defaultProps = { ...defaultProps }
Legend.defaultProps = { ...defaultProps }

export { Label, Legend }
