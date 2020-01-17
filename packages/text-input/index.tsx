import React, { ReactNode, ChangeEvent } from "react"
import { InlineError } from "@guardian/src-inline-error"
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
} from "./styles"
import { SerializedStyles } from "@emotion/css"
export { textInputLight } from "@guardian/src-foundations/themes"

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
		<div css={theme => supportingText(theme.textInput && theme)}>
			{children}
		</div>
	)
}

const TextInput = ({
	label: labelText,
	optional,
	supporting,
	width,
	error,
	...props
}: {
	label: string
	optional: boolean
	supporting?: string
	width?: Width
	error?: string
	value?: string
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}) => {
	return (
		<label>
			<div css={theme => text(theme.textInput && theme)}>
				{labelText}{" "}
				{optional ? (
					<span
						css={theme => optionalLabel(theme.textInput && theme)}
					>
						Optional
					</span>
				) : (
					""
				)}
			</div>
			{supporting ? <SupportingText>{supporting}</SupportingText> : ""}
			{error && <InlineError>{error}</InlineError>}
			<input
				css={theme => [
					width ? widths[width] : widthFluid,
					textInput(theme.textInput && theme),
					error ? errorInput(theme.textInput && theme) : "",
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
}

TextInput.defaultProps = { ...defaultProps }

export { TextInput }
