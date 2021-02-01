///<reference types="@emotion/react/types/css-prop" />
import React, { InputHTMLAttributes } from "react";
import { SerializedStyles } from "@emotion/react";
import { InlineError, InlineSuccess } from "@guardian/src-user-feedback";
import { Label } from "@guardian/src-label";
import {
	widthFluid,
	width30,
	width10,
	width4,
	textInput,
	errorInput,
	successInput,
} from "./styles";
import {
	visuallyHidden as _visuallyHidden,
	descriptionId,
	generateSourceId,
} from "@guardian/src-foundations/accessibility";
import { Props } from "@guardian/src-helpers";

export { textInputDefault } from "@guardian/src-foundations/themes";
export type Width = 30 | 10 | 4;

const widths: {
	[key in Width]: SerializedStyles;
} = {
	30: width30,
	10: width10,
	4: width4,
};

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>, Props {
	id?: string;
	label: string;
	optional: boolean;
	hideLabel: boolean;
	supporting?: string;
	width?: Width;
	error?: string;
	success?: string;
	cssOverrides?: SerializedStyles | SerializedStyles[];
}

const TextInput = ({
	id,
	label: labelText,
	optional,
	hideLabel,
	supporting,
	width,
	error,
	success,
	cssOverrides,
	...props
}: TextInputProps) => {
	const textInputId = id || generateSourceId();
	return (
		<Label
			text={labelText}
			optional={optional}
			hideLabel={hideLabel}
			supporting={supporting}
		>
			{error && (
				<InlineError id={descriptionId(textInputId)}>
					{error}
				</InlineError>
			)}
			{!error && success && (
				<InlineSuccess id={descriptionId(textInputId)}>
					{success}
				</InlineSuccess>
			)}
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
				id={textInputId}
				aria-required={!optional}
				aria-invalid={!!error}
				aria-describedby={
					error || success ? descriptionId(textInputId) : ""
				}
				required={!optional}
				{...props}
			/>
		</Label>
	);
};

const defaultProps = {
	disabled: false,
	type: "text",
	optional: false,
	hideLabel: false,
};

TextInput.defaultProps = { ...defaultProps };

export { TextInput };
