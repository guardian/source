import React from "react"
import { textInput, text, light, dark } from "./styles"

type Appearance = "light" | "dark"

const appearanceStyles: {
	[key in Appearance]: any
} = {
	light: light,
	dark: dark,
}

const TextInput = ({
	label: labelText,
	appearance,
	...props
}: {
	label: string
	appearance: Appearance
}) => {
	return (
		<label css={appearanceStyles[appearance]}>
			<span css={text}>{labelText}</span>
			<input css={textInput} type="text" {...props} />
		</label>
	)
}

const defaultProps = {
	appearance: "light",
	disabled: false,
}

TextInput.defaultProps = { ...defaultProps }

export { TextInput }
