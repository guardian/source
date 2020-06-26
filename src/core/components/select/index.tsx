import React, {
	ReactNode,
	SelectHTMLAttributes,
	OptionHTMLAttributes,
} from "react"
import { InlineError, InlineSuccess } from "@guardian/src-user-feedback"
import {
	select,
	label,
	errorInput,
	optionalLabel,
	supportingText,
	successInput,
} from "./styles"
import { Props } from "@guardian/src-helpers"

export { selectDefault } from "@guardian/src-foundations/themes"

const SupportingText = ({ children }: { children: ReactNode }) => {
	return (
		<div css={theme => supportingText(theme.select && theme)}>
			{children}
		</div>
	)
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, Props {
	label: string
	optional: boolean
	supporting?: string
	error?: string
	success?: string
}

const Select = ({
	label: labelText,
	optional,
	supporting,
	error,
	success,
	cssOverrides,
	children,
	...props
}: SelectProps) => {
	return (
		<label>
			<div css={theme => label(theme.select && theme)}>
				{labelText}{" "}
				{optional ? (
					<span css={theme => optionalLabel(theme.select && theme)}>
						Optional
					</span>
				) : (
					""
				)}
			</div>
			{supporting ? <SupportingText>{supporting}</SupportingText> : ""}
			{error && <InlineError>{error}</InlineError>}
			{!error && success && <InlineSuccess>{success}</InlineSuccess>}
			<select
				css={theme => [
					select(theme.select && theme),
					error ? errorInput(theme.select && theme) : "",
					!error && success
						? successInput(theme.select && theme)
						: "",
					cssOverrides,
				]}
				aria-required={!optional}
				{...props}
			>
				{children}
			</select>
		</label>
	)
}

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement>, Props {}

const Option = ({ cssOverrides, children, ...props }: OptionProps) => {
	return (
		<option css={cssOverrides} {...props}>
			{children}
		</option>
	)
}

const selectDefaultProps = {
	disabled: false,
	optional: false,
}

Select.defaultProps = { ...selectDefaultProps }

export { Select, Option }
