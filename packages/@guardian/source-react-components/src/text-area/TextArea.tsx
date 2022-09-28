import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { descriptionId, generateSourceId } from '@guardian/source-foundations';
import type { InputHTMLAttributes } from 'react';
import type { Props } from '../@types/Props';
import { Label } from '../label/Label';
import { InlineError } from '../user-feedback/InlineError';
import { InlineSuccess } from '../user-feedback/InlineSuccess';
import {
	errorInput,
	inlineMessageMargin,
	labelMargin,
	successInput,
	supportingTextMargin,
	textArea,
	widthFluid,
} from './styles';

export interface TextAreaProps
	extends InputHTMLAttributes<HTMLTextAreaElement>,
		Props {
	id?: string;
	/**
	 * The contents of the text area. This is necessary when using the [controlled approach](https://reactjs.org/docs/forms.html#controlled-components) to form state management.
	 *
	 * _Note: if you pass the `value` prop, you MUST also pass an `onChange` handler, or the field will be rendered as read-only._
	 */
	value?: string;
	/**
	 * Appears above the text area
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
	 * Appears as an inline error message.
	 */
	error?: string;
	/**
	 * Appears as an inline success message.
	 * This prop should not have a value set at the same time as the error prop. In the event that both are set, errors take precedence.
	 */
	success?: string;
	/**
	 * Specify the number of rows the component should display by default.
	 */
	rows?: number;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-textarea--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/567182-text-area/b/42916b) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/text-area/TextArea.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * The following themes are supported: `light`
 */
export const TextArea = ({
	id,
	label: labelText,
	optional = false,
	hideLabel = false,
	supporting,
	error,
	success,
	cssOverrides,
	rows = 3,
	className,
	value,
	...props
}: TextAreaProps): EmotionJSX.Element => {
	const textAreaId = id ?? generateSourceId();
	const getClassName = () => {
		const HAS_VALUE_CLASS = 'src-has-value';

		if (className) {
			return `${className}${value ? ` ${HAS_VALUE_CLASS}` : ''}`;
		}

		if (value) {
			return HAS_VALUE_CLASS;
		}

		return undefined;
	};

	return (
		<>
			<Label
				text={labelText}
				supporting={supporting}
				optional={!!optional}
				hideLabel={hideLabel}
				htmlFor={textAreaId}
			>
				{error && (
					<div css={inlineMessageMargin}>
						<InlineError id={descriptionId(textAreaId)}>{error}</InlineError>
					</div>
				)}
				{!error && success && (
					<div css={inlineMessageMargin}>
						<InlineSuccess id={descriptionId(textAreaId)}>
							{success}
						</InlineSuccess>
					</div>
				)}
			</Label>
			<textarea
				css={[
					widthFluid,
					textArea,
					supporting ? supportingTextMargin : labelMargin,
					error ? errorInput : '',
					!error && success ? successInput : '',
					cssOverrides,
				]}
				id={textAreaId}
				aria-required={!optional}
				aria-invalid={!!error}
				aria-describedby={error || success ? descriptionId(textAreaId) : ''}
				required={!optional}
				rows={rows}
				className={getClassName()}
				value={value}
				{...props}
			/>
		</>
	);
};
