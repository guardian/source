import React, {
	ReactNode,
	SelectHTMLAttributes,
	OptionHTMLAttributes,
} from "react"
import { SerializedStyles, css } from "@emotion/core"
import { InlineError, InlineSuccess } from "@guardian/src-user-feedback"
import {
	select,
	label,
	selectWrapper,
	errorChevron,
	successChevron,
	errorInput,
	optionalLabel,
	supportingText,
	successInput,
} from "./styles"
import { Props } from "@guardian/src-helpers"
import { SvgChevronDownSingle } from "@guardian/src-icons"

import { visuallyHidden as _visuallyHidden } from "@guardian/src-foundations/accessibility";
export { selectDefault } from "@guardian/src-foundations/themes"

const visuallyHidden = css`
	${_visuallyHidden}
`

const SupportingText = ({ children }: { children: ReactNode }) => {
	return (
		<div css={(theme) => supportingText(theme.select && theme)}>
			{children}
		</div>
	)
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, Props {
	label: string
	optional: boolean
	hideLabel: boolean
	supporting?: string
	error?: string
	success?: string
	cssOverrides?: SerializedStyles | SerializedStyles[]
	children: JSX.Element | JSX.Element[]
}

const Select = ({
	label: labelText,
	optional,
	hideLabel,
	supporting,
	error,
	success,
	cssOverrides,
	children,
	...props
}: SelectProps) => {
	return (
		<label>
			<div css={(theme) => [label(theme.select && theme), hideLabel ? visuallyHidden : ""]}>
				{labelText}{" "}
				{optional ? (
					<span css={(theme) => optionalLabel(theme.select && theme)}>
						Optional
					</span>
				) : (
					""
				)}
			</div>
			{supporting ? <SupportingText>{supporting}</SupportingText> : ""}
			{error && <InlineError>{error}</InlineError>}
			{!error && success && <InlineSuccess>{success}</InlineSuccess>}
			<div
				css={(theme) => [
					selectWrapper(theme.select && theme),
					error ? errorChevron(theme.select && theme) : "",
					!error && success
						? successChevron(theme.select && theme)
						: "",
				]}
			>
				<select
					css={(theme) => [
						select(theme.select && theme),
						error ? errorInput(theme.select && theme) : "",
						!error && success
							? successInput(theme.select && theme)
							: "",
						cssOverrides,
					]}
					aria-required={!optional}
					aria-invalid={!!error}
					{...props}
				>
					{children}
				</select>
				<SvgChevronDownSingle />
			</div>
		</label>
	)
}

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement>, Props {
	cssOverrides?: SerializedStyles | SerializedStyles[]
	children: string
}

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
	hideLabel: false,
}

Select.defaultProps = { ...selectDefaultProps }

export { Select, Option }
