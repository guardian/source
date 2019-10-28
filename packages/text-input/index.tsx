import React from "react"
import { InlineError } from "@guardian/src-inline-error"
import { textInput, textInputWide, text, errorInput } from "./styles"
export * from "./themes"

const TextInput = ({
	label: labelText,
	error,
	...props
}: {
	label: string
	error?: boolean | string
}) => {
	return (
		<label>
			<div css={theme => text(theme.textInput && theme)}>{labelText}</div>
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
}

TextInput.defaultProps = { ...defaultProps }

export { TextInput }
