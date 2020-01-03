import React, { ReactNode, ChangeEvent } from "react"
import {
	fieldset,
	label,
	labelWithSupportingText,
	checkbox,
	labelText,
	labelTextWithSupportingText,
	supportingText,
	tick,
	tickWithSupportingText,
	errorCheckbox,
} from "./styles"
import { InlineError } from "@guardian/src-inline-error"

const CheckboxGroup = ({
	name,
	error,
	children,
	...props
}: {
	name: string
	error?: string
	children: JSX.Element | JSX.Element[]
}) => {
	return (
		<fieldset css={fieldset} {...props}>
			{typeof error === "string" && <InlineError>{error}</InlineError>}
			{React.Children.map(children, child => {
				return React.cloneElement(
					child,
					Object.assign(error ? { error: true } : {}, {
						name,
					}),
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
			css={[
				labelText,
				hasSupportingText ? labelTextWithSupportingText : "",
			]}
		>
			{children}
		</div>
	)
}

const SupportingText = ({ children }: { children: ReactNode }) => {
	return <div css={supportingText}>{children}</div>
}

const Checkbox = ({
	label: labelContent,
	value,
	checked,
	supporting,
	defaultChecked,
	error,
	indeterminate,
	...props
}: {
	label: ReactNode
	value: string
	checked?: boolean
	supporting?: ReactNode
	defaultChecked: boolean
	indeterminate: boolean
	error: boolean
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}) => {
	const isChecked = (): boolean | "mixed" => {
		// Note: the indeterminate prop takes precedence over the checked prop
		if (indeterminate) {
			return "mixed"
		}

		if (checked != null) {
			return checked
		}

		return defaultChecked
	}
	const setCheckboxState = (el: HTMLInputElement | null): void => {
		if (el) {
			el.indeterminate = indeterminate
			if (checked != null) {
				el.checked = checked
			}
		}
	}
	return (
		<label css={[label, supporting ? labelWithSupportingText : ""]}>
			<input
				css={[checkbox, error ? errorCheckbox : ""]}
				value={value}
				aria-invalid={error}
				aria-checked={isChecked()}
				ref={setCheckboxState}
				{...props}
			/>
			<span css={[tick, supporting ? tickWithSupportingText : ""]} />
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
}

const checkboxDefaultProps = {
	disabled: false,
	type: "checkbox",
	defaultChecked: false,
	indeterminate: false,
	error: false,
}

Checkbox.defaultProps = { ...checkboxDefaultProps }

export { CheckboxGroup, Checkbox }
