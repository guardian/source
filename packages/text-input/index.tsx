import React, { ReactNode } from "react"
import { InlineError } from "@guardian/src-inline-error"
import {
	textInput,
	textInputWide,
	text,
	errorInput,
	optionalLabel,
	supportingText,
} from "./styles"
export * from "./themes"

const SupportingText = ({ children }: { children: ReactNode }) => {
	return <div css={supportingText}>{children}</div>
}

const TextInput = ({
	label: labelText,
	error,
	optional,
	supporting,
	...props
}: {
	label: string
	error: boolean | string
	optional: boolean
	supporting?: string
}) => {
	return (
		<label>
			<div css={theme => text(theme.textInput && theme)}>
				{labelText}{" "}
				{optional ? <span css={optionalLabel}>Optional</span> : ""}
			</div>
			{supporting ? <SupportingText>{supporting}</SupportingText> : ""}
			{typeof error === "string" && <InlineError>{error}</InlineError>}
			<input
				css={theme => [
					textInput(theme.textInput && theme),
					textInputWide,
					error ? errorInput : "",
				]}
				{...props}
			/>
		</label>
	)
}

const defaultProps = {
	disabled: false,
	type: "text",
	optional: false,
	error: false,
}

TextInput.defaultProps = { ...defaultProps }

export { TextInput }
