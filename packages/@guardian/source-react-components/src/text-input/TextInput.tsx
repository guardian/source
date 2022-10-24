import type { SerializedStyles } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { descriptionId, generateSourceId } from '@guardian/source-foundations';
import type { InputHTMLAttributes } from 'react';
import type { Props } from '../@types/Props';
import type { Theme } from '../@types/Theme';
import { Label } from '../label/Label';
import { InlineError } from '../user-feedback/InlineError';
import { InlineSuccess } from '../user-feedback/InlineSuccess';
import {
	errorInput,
	inlineMessageMargin,
	labelMargin,
	successInput,
	supportingTextMargin,
	textInput,
	width10,
	width30,
	width4,
	widthFluid,
} from './styles';

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
	 * Appears as an inline error message.
	 */
	error?: string;
	/**
	 * Appears as an inline success message.
	 * This prop should not have a value set at the same time as the error prop. In the event that both are set, errors take precedence.
	 */
	success?: string;
	/**
	 * The contents of the text input field. This is necessary when using the [controlled approach](https://reactjs.org/docs/forms.html#controlled-components) to form state management.
	 *
	 * _Note: if you pass the `value` prop, you MUST also pass an `onChange` handler, or the field will be rendered as read-only_
	 */
	value?: string;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-textinput--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/097455-text-input-field/b/050445) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/text-input/TextInput.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Single line fields that allow users to enter freeform data.
 *
 * The following themes are supported: `light`
 */
export const TextInput = ({
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
}: TextInputProps): EmotionJSX.Element => {
	const textInputId = id ?? generateSourceId();
	return (
		<>
			<Label
				text={labelText}
				optional={!!optional}
				hideLabel={hideLabel}
				supporting={supporting}
				htmlFor={textInputId}
			>
				{error && (
					<div css={inlineMessageMargin}>
						<InlineError id={descriptionId(textInputId)}>{error}</InlineError>
					</div>
				)}
				{!error && success && (
					<div css={inlineMessageMargin}>
						<InlineSuccess id={descriptionId(textInputId)}>
							{success}
						</InlineSuccess>
					</div>
				)}
			</Label>
			<input
				css={(theme: Theme) => [
					width ? widths[width] : widthFluid,
					textInput(theme.textInput),
					supporting ? supportingTextMargin : labelMargin,
					error ? errorInput(theme.textInput) : '',
					!error && success ? successInput(theme.textInput) : '',
					cssOverrides,
				]}
				type="text"
				id={textInputId}
				aria-required={!optional}
				aria-invalid={!!error}
				aria-describedby={error || success ? descriptionId(textInputId) : ''}
				required={!optional}
				{...props}
			/>
		</>
	);
};
