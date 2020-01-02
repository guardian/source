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
	error,
	indeterminate,
	...props
}: {
	label: ReactNode
	value: string
	checked: boolean
	supporting?: ReactNode
	indeterminate: boolean
	error: boolean
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}) => {
	const isChecked = (): boolean | "mixed" => {
		if (indeterminate) return "mixed"
		return checked
	}
	const setCheckboxState = (el: HTMLInputElement | null): void => {
		if (el) {
			el.indeterminate = indeterminate
			el.checked = checked
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
	checked: false,
	error: false,
	indeterminate: false,
}

Checkbox.defaultProps = { ...checkboxDefaultProps }

export { CheckboxGroup, Checkbox }
