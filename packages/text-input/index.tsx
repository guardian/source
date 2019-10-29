import React from "react"
import { InlineError } from "@guardian/src-inline-error"
import {
	textInput,
	textInputWide,
	text,
	errorInput,
	optionalLabel,
} from "./styles"
export * from "./themes"

const TextInput = ({
	label: labelText,
	error,
	optional,
	...props
}: {
	label: string
	error: boolean | string
	optional: boolean
}) => {
	return (
		<label>
			<div css={theme => text(theme.textInput && theme)}>
				{labelText}{" "}
				{optional ? <span css={optionalLabel}>Optional</span> : ""}
			</div>
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
