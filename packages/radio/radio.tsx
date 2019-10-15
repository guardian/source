import React, { ReactNode } from "react"
import {
	group,
	label,
	labelWithSupportingText,
	radio,
	labelText,
	labelTextWithSupportingText,
	supportingText,
	lightLabel,
	lightRadio,
	lightText,
	lightSupportingText,
	darkLabel,
	darkRadio,
	darkText,
	darkSupportingText,
	horizontal,
	vertical,
	inlineError,
	errorRadio,
} from "./styles"
import { Appearance } from "@guardian/src-helpers"
import { SvgAlert } from "@guardian/src-svgs"

type Orientation = "vertical" | "horizontal"

const appearances = {
	light: {
		label: lightLabel,
		radio: lightRadio,
		text: lightText,
		supportingText: lightSupportingText,
	},
	dark: {
		label: darkLabel,
		radio: darkRadio,
		text: darkText,
		supportingText: darkSupportingText,
	},
	blue: {
		label: darkLabel,
		radio: darkRadio,
		text: darkText,
		supportingText: darkSupportingText,
	},
	yellow: {
		label: lightLabel,
		radio: lightRadio,
		text: lightText,
		supportingText: lightSupportingText,
	},
}

const orientationStyles = {
	vertical: vertical,
	horizontal: horizontal,
}

const InlineError = ({ children }: { children: ReactNode }) => (
	<span css={inlineError}>
		<SvgAlert />
		{children}
	</span>
)

const RadioGroup = ({
	name,
	appearance,
	orientation,
	error,
	children,
	...props
}: {
	name: string
	appearance: Appearance
	orientation: Orientation
	error?: boolean | string
	children: ReactNode
}) => {
	return (
		<div css={[group, orientationStyles[orientation]]} {...props}>
			{typeof error === "string" && <InlineError>{error}</InlineError>}
			{React.Children.map(children, child => {
				if (!React.isValidElement(child)) {
					// Consumer is probably passing a text node as a child
					// TODO: Pass error to terminal
					return <div />
				}

				return React.cloneElement(
					child,
					Object.assign(error ? { error: true } : {}, {
						name,
						appearance,
					}),
				)
			})}
		</div>
	)
}

const LabelText = ({
	appearance,
	hasSupportingText,
	children,
}: {
	appearance: Appearance
	hasSupportingText?: boolean
	children: ReactNode
}) => {
	return (
		<div
			css={[
				hasSupportingText ? labelTextWithSupportingText : labelText,
				appearances[appearance].text,
			]}
		>
			{children}
		</div>
	)
}

const SupportingText = ({
	children,
	appearance,
}: {
	children: ReactNode
	appearance: Appearance
}) => {
	return (
		<div css={[supportingText, appearances[appearance].supportingText]}>
			{children}
		</div>
	)
}

const Radio = ({
	value,
	label: labelContent,
	supporting,
	defaultChecked,
	appearance,
	error,
	...props
}: {
	value: string
	label: string
	supporting?: string
	defaultChecked?: boolean
	appearance: Appearance
	error?: boolean
}) => {
	return (
		<label
			css={[
				label,
				supporting ? labelWithSupportingText : "",
				appearances[appearance].label,
			]}
		>
			<input
				css={[
					radio,
					appearances[appearance].radio,
					error ? errorRadio : "",
				]}
				value={value}
				type="radio"
				defaultChecked={defaultChecked}
				aria-invalid={error}
				{...props}
			/>
			{supporting ? (
				<div>
					<LabelText appearance={appearance} hasSupportingText={true}>
						{labelContent}
					</LabelText>
					<SupportingText appearance={appearance}>
						{supporting}
					</SupportingText>
				</div>
			) : (
				<LabelText appearance={appearance}>{labelContent}</LabelText>
			)}
		</label>
	)
}

const radioGroupDefaultProps = {
	appearance: "light",
	orientation: "vertical",
}
const radioDefaultProps = {
	disabled: false,
	appearance: "light",
}

Radio.defaultProps = { ...radioDefaultProps }
RadioGroup.defaultProps = { ...radioGroupDefaultProps }

export { RadioGroup, Radio }
