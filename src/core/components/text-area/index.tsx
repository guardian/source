import React, { ReactNode, InputHTMLAttributes } from "react"
import { InlineError } from "@guardian/src-user-feedback"
import {
	widthFluid,
	textArea,
	label,
	errorInput,
	optionalLabel,
	supportingText,
} from "./styles"
import { Props } from "@guardian/src-helpers"

export { textInputLight } from "@guardian/src-foundations/themes"

const SupportingText = ({ children }: { children: ReactNode }) => {
	return <div css={supportingText}>{children}</div>
}

interface TextAreaProps
	extends InputHTMLAttributes<HTMLTextAreaElement>,
		Props {
	label: string
	optional: boolean
	supporting?: string
	error?: string
	rows?: number
}

const TextArea = ({
	label: labelText,
	optional,
	supporting,
	error,
	cssOverrides,
	...props
}: TextAreaProps) => {
	return (
		<label>
			<div css={label}>
				{labelText}{" "}
				{optional ? <span css={optionalLabel}>Optional</span> : ""}
			</div>
			{supporting ? <SupportingText>{supporting}</SupportingText> : ""}
			{error && <InlineError>{error}</InlineError>}
			<textarea
				css={[
					widthFluid,
					textArea,
					error ? errorInput : "",
					cssOverrides,
				]}
				aria-required={!optional}
				{...props}
			/>
		</label>
	)
}

const defaultProps = {
	disabled: false,
	optional: false,
}

TextArea.defaultProps = { ...defaultProps }

export { TextArea }
