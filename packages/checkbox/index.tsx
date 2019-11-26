import React, { ReactNode } from "react"
import {
	group,
	label,
	labelWithSupportingText,
	checkbox,
	labelText,
	labelTextWithSupportingText,
	supportingText,
	vertical,
	errorCheckbox,
} from "./styles"
import { InlineError } from "@guardian/src-inline-error"
export { radioBrand, radioLight } from "@guardian/src-foundations/themes"

const CheckboxGroup = ({
	name,
	error,
	children,
	...props
}: {
	name: string
	error?: boolean | string
	children: ReactNode
}) => {
	return (
		<div css={[group, vertical]} {...props}>
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
	...props
}: {
	label: string
	value: string
	supporting?: string
	error?: boolean
}) => {
	return (
		<label css={[label, supporting ? labelWithSupportingText : ""]}>
			<input
				css={[checkbox, error ? errorCheckbox : ""]}
				value={value}
				aria-invalid={error}
				{...props}
			/>
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
}

Checkbox.defaultProps = { ...checkboxDefaultProps }

export { CheckboxGroup, Checkbox }
