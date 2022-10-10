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
import {
	errorInput,
	hasExtensions,
	inlineMessageMargin,
	inputPrefix,
	inputSuffix,
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

interface InputTheme extends Theme {
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
	 * Appears before the input. May be used with or without a suffix.
	 * Will not be read by screen readers, so do not rely on this alone
	 */
	prefix?: string;
	/**
	 * Appears after the input. May be used with or without a prefix.
	 * Will not be read by screen readers, so do not rely on this alone
	 */
	suffix?: string;
};

export const NumericInput = ({
	id,
	label: labelText,
	optional = false,
	hideLabel = false,
	supporting,
	width,
	error,
	success,
	prefix,
	suffix,
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
				{prefix && (
					<span
						aria-hidden="true"
						css={(theme: InputTheme) => inputPrefix(theme.textInput)}
					>
						{prefix}
					</span>
				)}
				<input
					css={(theme: InputTheme) => [
						width ? widths[width] : widthFluid,
						textInput(theme.textInput),
						error ? errorInput(theme.textInput) : '',
						!error && success ? successInput(theme.textInput) : '',
						hasExtensions(prefix, suffix),
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
				{suffix && (
					<span
						aria-hidden="true"
						css={(theme: InputTheme) => inputSuffix(theme.textInput)}
					>
						{suffix}
					</span>
				)}
			</div>
		</>
	);
};
