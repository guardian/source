import { InputHTMLAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';
import { InlineError, InlineSuccess } from '@guardian/src-user-feedback';
import { Label } from '@guardian/src-label';
import {
	widthFluid,
	width30,
	width10,
	width4,
	textInput,
	errorInput,
	successInput,
} from './styles';
import {
	visuallyHidden as _visuallyHidden,
	descriptionId,
	generateSourceId,
} from '@guardian/src-foundations/accessibility';
import { Props } from '@guardian/src-helpers';

export { textInputDefault } from '@guardian/src-foundations/themes';
export type Width = 30 | 10 | 4;

const widths: {
	[key in Width]: SerializedStyles;
} = {
	30: width30,
	10: width10,
	4: width4,
};

export interface TextInputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>,
		Props {
	id?: string;
	/**
	 * Appears above the text input
	 */
	label: string;
	/**
	 * Adds the word "Optional" after the label. Non-optional fields are rendered with the `required` attribute.
	 */
	optional?: boolean;
	/**
	 * Visually hides the label and the "Optional" text set by the `optional` flag.
	 */
	hideLabel?: boolean;
	/**
	 * Additional text that appears below the label
	 */
	supporting?: string;
	/**
	 * Determines the width of a fixed-length field, based on the specified character length of the user input. If unspecified,
	 * the width will default to 100% of the field's container.
	 */
	width?: Width;
	/**
	 * Whether error styling should apply to this text input. The string appears as an inline error message.
	 */
	error?: string;
	/**
	 * Whether success styling should apply to this text input. The string appears as an inline success message.
	 * This prop should not have a value set at the same time as the error prop. In the event that both are set, errors take precedence.
	 */
	success?: string;
	/**
	 * The contents of the text input field. This is necessary when using the controlled approach to form state management.
	 *
	 * _Note: if you pass the `value` prop, you MUST also pass an `onChange` handler, or the field will be rendered as read-only_
	 */
	value?: string;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-text-area-text-area--demo) •
 * [Design System](https://theguardian.design/2a1e5182b/p/097455-text-input-field/b/050445) •
 * [GitHub](https://github.com/guardian/source/tree/main/src/core/components/text-input) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-text-input)
 *
 * Single line fields that allow users to enter freeform data.
 *
 * The following themes are supported: `light`
 */
const TextInput = ({
	id,
	label: labelText,
	optional = false,
	hideLabel = false,
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
			optional={!!optional}
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
					error ? errorInput(theme.textInput && theme) : '',
					!error && success
						? successInput(theme.textInput && theme)
						: '',
					cssOverrides,
				]}
				type="text"
				id={textInputId}
				aria-required={!optional}
				aria-invalid={!!error}
				aria-describedby={
					error || success ? descriptionId(textInputId) : ''
				}
				required={!optional}
				{...props}
			/>
		</Label>
	);
};

export { TextInput };
