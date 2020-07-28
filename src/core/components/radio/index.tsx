import React, { ReactNode, InputHTMLAttributes } from "react"
import { SerializedStyles } from "@emotion/core"
import { InlineError } from "@guardian/src-user-feedback"
import {
	fieldset,
	label,
	labelWithSupportingText,
	radio,
	labelText,
	labelTextWithSupportingText,
	supportingText,
	horizontal,
	vertical,
	errorRadio,
} from "./styles"
import { Props } from "@guardian/src-helpers"

export { radioBrand, radioDefault } from "@guardian/src-foundations/themes"

type Orientation = "vertical" | "horizontal"

const orientationStyles = {
	vertical: vertical,
	horizontal: horizontal,
}

interface RadioGroupProps extends Props {
	name: string
	orientation: Orientation
	error?: string
	children: JSX.Element | JSX.Element[]
	cssOverrides?: SerializedStyles | SerializedStyles[]
}

const RadioGroup = ({
	name,
	orientation,
	error,
	cssOverrides,
	children,
	...props
}: RadioGroupProps) => {
	// TODO: This is currently a div instead of a fieldset due to a Chrome / Safari
	// bug that prevents flexbox model working on fieldset elements
	// https://bugs.chromium.org/p/chromium/issues/detail?id=375693
	return (
		<div
			css={[fieldset, orientationStyles[orientation], cssOverrides]}
			{...props}
		>
			{error && <InlineError>{error}</InlineError>}
			{React.Children.map(children, (child) => {
				return React.cloneElement(
					child,
					Object.assign(error ? { error: true } : {}, {
						name,
					}),
				)
			})}
		</div>
	)
}

const LabelText = ({
	hasSupportingText,
	children,
}: {
	hasSupportingText?: boolean
	children: ReactNode
}) => {
	return (
		<div
			css={(theme) => [
				hasSupportingText ? labelTextWithSupportingText : "",
				labelText(theme.radio && theme),
			]}
		>
			{children}
		</div>
	)
}

const SupportingText = ({ children }: { children: ReactNode }) => {
	return (
		<div css={(theme) => supportingText(theme.radio && theme)}>
			{children}
		</div>
	)
}

interface RadioProps extends InputHTMLAttributes<HTMLInputElement>, Props {
	value: string
	checked?: boolean
	defaultChecked?: boolean
	label?: ReactNode
	supporting?: ReactNode
	error: boolean
	cssOverrides?: SerializedStyles | SerializedStyles[]
}

const Radio = ({
	label: labelContent,
	value,
	supporting,
	checked,
	defaultChecked,
	cssOverrides,
	error,
	...props
}: RadioProps) => {
	const isChecked = (): boolean => {
		if (checked != null) {
			return checked
		}

		return !!defaultChecked
	}
	const radioControl = (
		<input
			css={(theme) => [
				radio(theme.radio && theme),
				error ? errorRadio(theme.radio && theme) : "",
				cssOverrides,
			]}
			value={value}
			aria-invalid={error}
			aria-checked={isChecked()}
			defaultChecked={defaultChecked != null ? defaultChecked : undefined}
			checked={checked != null ? isChecked() : undefined}
			{...props}
		/>
	)

	const labelledRadioControl = (
		<label
			css={(theme) => [
				label(theme.radio && theme),
				supporting ? labelWithSupportingText : "",
			]}
		>
			{radioControl}
			{supporting ? (
				<div>
					<LabelText hasSupportingText={true}>
						{labelContent}
					</LabelText>
					<SupportingText>{supporting}</SupportingText>
				</div>
			) : (
				<LabelText>{labelContent}</LabelText>
			)}
		</label>
	)

	return (
		<>{labelContent || supporting ? labelledRadioControl : radioControl}</>
	)
}

const radioGroupDefaultProps = {
	orientation: "vertical",
}
const radioDefaultProps = {
	disabled: false,
	type: "radio",
	error: false,
}

Radio.defaultProps = { ...radioDefaultProps }
RadioGroup.defaultProps = { ...radioGroupDefaultProps }

export { RadioGroup, Radio }
