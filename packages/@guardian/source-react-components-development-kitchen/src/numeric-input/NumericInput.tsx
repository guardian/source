import type { SerializedStyles, Theme } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { descriptionId, generateSourceId } from '@guardian/source-foundations';
import type {
	TextInputProps,
	textInputThemeDefault,
} from '@guardian/source-react-components';
import {
	InlineError,
	InlineSuccess,
	Label,
} from '@guardian/source-react-components';
import { InputExtension } from './InputExtension';
import {
	errorInput,
	hasExtensions,
	inlineMessageMargin,
	inputWrapper,
	labelMargin,
	successInput,
	supportingTextMargin,
	textInput,
	width10,
	width30,
	width4,
	widthFluid,
} from './styles';

export interface InputTheme extends Theme {
	textInput?: typeof textInputThemeDefault.textInput;
}

export type Width = 30 | 10 | 4;

const widths: {
	[key in Width]: SerializedStyles;
} = {
	30: width30,
	10: width10,
	4: width4,
};

export type NumericInputProps = Omit<TextInputProps, 'inputmode'> & {
	/**
	 * Appears after the input. May be used with or without a prefix.
	 * Will not be read by screen readers, so do not rely on this alone to convey meaning.
	 */
	suffixText?: string;
	/**
	 * Appears before the input. May be used with or without a suffix.
	 * Will not be read by screen readers, so do not rely on this alone to convey meaning.
	 */
	prefixText?: string;
};

/**
 * This is an iteration on the core TextInput component for taking numeric input, such as currency amounts.
 * It can optionally display a prefix and/or suffix to add additonal visual context.
 *
 * **Note**: This component enforces inputmode="numeric" so a number keypad will appear on mobile devices
 */
export const NumericInput = ({
	id,
	label: labelText,
	optional = false,
	hideLabel = false,
	supporting,
	width,
	error,
	success,
	prefixText,
	suffixText,
	cssOverrides,
	...props
}: NumericInputProps): EmotionJSX.Element => {
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
			<div
				css={[inputWrapper, supporting ? supportingTextMargin : labelMargin]}
			>
				{prefixText && (
					<InputExtension type="prefix">{prefixText}</InputExtension>
				)}
				<input
					css={(theme: InputTheme) => [
						width ? widths[width] : widthFluid,
						textInput(theme.textInput),
						error ? errorInput(theme.textInput) : '',
						!error && success ? successInput(theme.textInput) : '',
						hasExtensions(prefixText, suffixText),
						cssOverrides,
					]}
					type="text"
					inputMode="numeric"
					id={textInputId}
					aria-required={!optional}
					aria-invalid={!!error}
					aria-describedby={error || success ? descriptionId(textInputId) : ''}
					required={!optional}
					{...props}
				/>
				{suffixText && (
					<InputExtension type="suffix">{suffixText}</InputExtension>
				)}
			</div>
		</>
	);
};
