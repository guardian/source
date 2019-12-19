import React, { ReactNode } from "react"
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
	supporting,
	error,
	isIndeterminate,
	defaultChecked,
	...props
}: {
	label: string
	value: string
	supporting?: ReactNode
	isIndeterminate: boolean
	defaultChecked: boolean
	error: boolean
}) => {
	const isChecked = (): boolean | "mixed" => {
		if (isIndeterminate) return "mixed"
		return defaultChecked
	}
	const setIndeterminate = (el: HTMLInputElement | null): void => {
		if (el) {
			el.indeterminate = isIndeterminate
		}
	}
	return (
		<label css={[label, supporting ? labelWithSupportingText : ""]}>
			<input
				css={[checkbox, error ? errorCheckbox : ""]}
				value={value}
				aria-invalid={error}
				aria-checked={isChecked()}
				ref={setIndeterminate}
				defaultChecked={defaultChecked}
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
	error: false,
	isIndeterminate: false,
}

Checkbox.defaultProps = { ...checkboxDefaultProps }

export { CheckboxGroup, Checkbox }
