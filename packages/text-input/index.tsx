import React from "react"
import { textInput, textInputWide, text } from "./styles"
export * from "./themes"

const TextInput = ({ label: labelText, ...props }: { label: string }) => {
	return (
		<label>
			<div css={theme => text(theme.textInput && theme)}>{labelText}</div>
			<input
				css={theme => [
					textInput(theme.textInput && theme),
					textInputWide,
				]}
				type="text"
				{...props}
			/>
		</label>
	)
}

const defaultProps = {
	disabled: false,
}

TextInput.defaultProps = { ...defaultProps }

export { TextInput }
