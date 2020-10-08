import React, { ReactNode, InputHTMLAttributes } from "react"
import { SerializedStyles } from "@emotion/core"
import { InlineError } from "@guardian/src-user-feedback"
import { descriptionId } from "@guardian/src-foundations/accessibility"
import { Legend } from "@guardian/src-label"
import {
	fieldset,
	label,
	labelWithSupportingText,
	checkbox,
	labelText,
	labelTextWithSupportingText,
	supportingText,
	tick,
	tickWithLabelText,
	tickWithSupportingText,
	errorCheckbox,
} from "./styles"
import { Props } from "@guardian/src-helpers"

export {
	checkboxDefault,
	checkboxBrand,
} from "@guardian/src-foundations/themes"

interface CheckboxGroupProps extends Props {
	// TODO: this is required when an error is passed to correctly set aria-describedby
	// We should introduce a way of generating element IDs when they are not explicitly passed
	id?: string
	name: string
	label?: string
	hideLabel: boolean
	supporting?: string
	error?: string
	children: JSX.Element | JSX.Element[]
	cssOverrides?: SerializedStyles | SerializedStyles[]
}

const CheckboxGroup = ({
	id,
	name,
	label,
	hideLabel,
	supporting,
	error,
	cssOverrides,
	children,
	...props
}: CheckboxGroupProps) => {
	const legend = label ? (
		<Legend text={label} supporting={supporting} hideLabel={hideLabel} />
	) : (
		""
	)

	const message =
		typeof error === "string" ? (
			<InlineError id={id ? descriptionId(id) : ""}>{error}</InlineError>
		) : (
			""
		)

	return (
		<fieldset css={[fieldset, cssOverrides]} id={id} {...props}>
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
		<div
			css={(theme) => [
				labelText(theme.checkbox && theme),
				hasSupportingText ? labelTextWithSupportingText : "",
			]}
		>
			{children}
		</div>
	)
}

const SupportingText = ({ children }: { children: ReactNode }) => {
	return (
		<div css={(theme) => supportingText(theme.checkbox && theme)}>
			{children}
		</div>
	)
}

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>, Props {
	value: string
	checked?: boolean
	defaultChecked?: boolean
	label?: ReactNode
	supporting?: ReactNode
	indeterminate: boolean
	error: boolean
	cssOverrides?: SerializedStyles | SerializedStyles[]
}

const Checkbox = ({
	label: labelContent,
	value,
	checked,
	supporting,
	defaultChecked,
	error,
	indeterminate,
	cssOverrides,
	...props
}: CheckboxProps) => {
	const ariaChecked = (): boolean | "mixed" => {
		// Note: the indeterminate prop takes precedence over the checked prop
		if (indeterminate) {
			return "mixed"
		}

		if (checked != null) {
			return checked
		}

		return !!defaultChecked
	}
	const isChecked = (): boolean => {
		if (checked != null) {
			return checked
		}

		return !!defaultChecked
	}
	const setIndeterminate = (el: HTMLInputElement | null): void => {
		if (el) {
			el.indeterminate = indeterminate
		}
	}

	const box = (
		<>
			<input
				type="checkbox"
				css={(theme) => [
					checkbox(theme.checkbox && theme),
					error ? errorCheckbox(theme.checkbox && theme) : "",
					cssOverrides,
				]}
				value={value}
				aria-invalid={error}
				aria-checked={ariaChecked()}
				ref={setIndeterminate}
				defaultChecked={
					defaultChecked != null ? defaultChecked : undefined
				}
				checked={checked != null ? isChecked() : undefined}
				{...props}
			/>
			<span
				css={(theme) => [
					tick(theme.checkbox && theme),
					labelContent || supporting ? tickWithLabelText : "",
					supporting ? tickWithSupportingText : "",
				]}
			/>
		</>
	)

	const labelledBox = (
		<label
			css={(theme) => [
				label(theme.checkbox && theme),
				supporting ? labelWithSupportingText : "",
			]}
		>
			{box}
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

	return <>{labelContent || supportingText ? labelledBox : box}</>
}

const checkboxDefaultProps = {
	disabled: false,
	indeterminate: false,
	error: false,
}

const checkboxGroupDefaultProps = {
	hideLabel: false,
}

Checkbox.defaultProps = { ...checkboxDefaultProps }
CheckboxGroup.defaultProps = { ...checkboxGroupDefaultProps }

export { CheckboxGroup, Checkbox }
