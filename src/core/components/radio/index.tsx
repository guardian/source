import React, { ReactNode, InputHTMLAttributes } from "react"
import { SerializedStyles } from "@emotion/core"
import { Legend } from "@guardian/src-label"
import { InlineError } from "@guardian/src-user-feedback"
import { descriptionId } from "@guardian/src-foundations/accessibility"
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
	id?: string
	name: string
	label?: string
	supporting?: string
	orientation: Orientation
	error?: string
	children: JSX.Element | JSX.Element[]
	cssOverrides?: SerializedStyles | SerializedStyles[]
}

const RadioGroup = ({
	id,
	name,
	label,
	supporting,
	orientation,
	error,
	cssOverrides,
	children,
	...props
}: RadioGroupProps) => {
	const legend = label ? <Legend text={label} supporting={supporting} /> : ""
	const message = error && (
		<InlineError id={id ? descriptionId(id) : ""}>{error}</InlineError>
	)

	return (
		<fieldset
			id={id}
			css={[fieldset, orientationStyles[orientation], cssOverrides]}
			{...props}
		>
			{legend}
			{message}
			{React.Children.map(children, (child) => {
				return React.cloneElement(
					child,
					Object.assign(
						error ? { error: true } : {},
						error && id
							? { "aria-describedby": descriptionId(id) }
							: {},
						{
							name,
						},
					),
				)
			})}
		</fieldset>
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
		<span
			css={(theme) => [
				hasSupportingText ? labelTextWithSupportingText : "",
				labelText(theme.radio && theme),
			]}
			className="src-radio-label-text"
		>
			{children}
		</span>
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
