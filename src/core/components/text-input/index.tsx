import React, { ReactNode, InputHTMLAttributes } from "react"
import { SerializedStyles } from "@emotion/css"
import { InlineError, InlineSuccess } from "@guardian/src-user-feedback"
import {
	widthFluid,
	width30,
	width10,
	width4,
	textInput,
	text,
	errorInput,
	optionalLabel,
	supportingText,
	successInput,
} from "./styles"
import { Props } from "@guardian/src-helpers"

export { textInputDefault } from "@guardian/src-foundations/themes"
export type Width = 30 | 10 | 4

const widths: {
	[key in Width]: SerializedStyles
} = {
	30: width30,
	10: width10,
	4: width4,
}

const SupportingText = ({ children }: { children: ReactNode }) => {
	return (
		<div css={(theme) => supportingText(theme.textInput && theme)}>
			{children}
		</div>
	)
}

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>, Props {
	label: string
	optional: boolean
	supporting?: string
	width?: Width
	error?: string
	success?: string
}

const TextInput = ({
	label: labelText,
	optional,
	supporting,
	width,
	error,
	success,
	cssOverrides,
	...props
}: TextInputProps) => {
	return (
		<label>
			<div css={(theme) => text(theme.textInput && theme)}>
				{labelText}{" "}
				{optional ? (
					<span
						css={(theme) => optionalLabel(theme.textInput && theme)}
					>
						Optional
					</span>
				) : (
					""
				)}
			</div>
			{supporting ? <SupportingText>{supporting}</SupportingText> : ""}
			{error && <InlineError>{error}</InlineError>}
			{!error && success && <InlineSuccess>{success}</InlineSuccess>}
			<input
				css={(theme) => [
					width ? widths[width] : widthFluid,
					textInput(theme.textInput && theme),
					error ? errorInput(theme.textInput && theme) : "",
					!error && success
						? successInput(theme.textInput && theme)
						: "",
					cssOverrides,
				]}
				aria-required={!optional}
				aria-invalid={!!error}
				required={!optional}
				{...props}
			/>
		</label>
	)
}

const defaultProps = {
	disabled: false,
	type: "text",
	optional: false,
}

TextInput.defaultProps = { ...defaultProps }

export { TextInput }
