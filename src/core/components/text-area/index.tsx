import React, { ReactNode, InputHTMLAttributes } from "react"
import { SerializedStyles, css } from "@emotion/core"
import { InlineError } from "@guardian/src-user-feedback"
import {
	widthFluid,
	textArea,
	label,
	errorInput,
	optionalLabel,
	supportingText,
} from "./styles"
import { visuallyHidden as _visuallyHidden } from "@guardian/src-foundations/accessibility"
import { Props } from "@guardian/src-helpers"

const visuallyHidden = css`
	${_visuallyHidden}
`

const SupportingText = ({ children }: { children: ReactNode }) => {
	return <div css={supportingText}>{children}</div>
}

interface TextAreaProps
	extends InputHTMLAttributes<HTMLTextAreaElement>,
		Props {
	value?: string
	label: string
	optional: boolean
	hideLabel: boolean
	supporting?: string
	error?: string
	rows?: number
	cssOverrides?: SerializedStyles | SerializedStyles[]
	className?: string
}

const TextArea = ({
	label: labelText,
	optional,
	hideLabel,
	supporting,
	error,
	cssOverrides,
	rows = 3,
	className,
	value,
	...props
}: TextAreaProps) => {
	const getClassName = () => {
		const HAS_VALUE_CLASS = "src-has-value"

		if (className) {
			return `${className}${value ? ` ${HAS_VALUE_CLASS}` : ""}`
		}

		if (value) {
			return HAS_VALUE_CLASS
		}

		return undefined
	}

	return (
		<label>
			<div css={[label, hideLabel ? visuallyHidden : ""]}>
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
				aria-invalid={!!error}
				required={!optional}
				rows={rows}
				className={getClassName()}
				{...props}
			/>
		</label>
	)
}

const defaultProps = {
	disabled: false,
	optional: false,
	hideLabel: false,
}

TextArea.defaultProps = { ...defaultProps }

export { TextArea }
