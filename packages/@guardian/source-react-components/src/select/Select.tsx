import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { descriptionId, generateSourceId } from '@guardian/source-foundations';
import type { SelectHTMLAttributes } from 'react';
import { SvgChevronDownSingle } from '../../vendor/icons/SvgChevronDownSingle';
import type { Props } from '../@types/Props';
import type { Theme } from '../@types/Theme';
import { Label } from '../label/Label';
import { InlineError } from '../user-feedback/InlineError';
import { InlineSuccess } from '../user-feedback/InlineSuccess';
import {
	errorChevron,
	errorInput,
	select,
	selectWrapper,
	successChevron,
	successInput,
} from './styles';

export interface SelectProps
	extends SelectHTMLAttributes<HTMLSelectElement>,
		Props {
	id?: string;
	/**
	 * Appears above the select box
	 */
	label: string;
	/**
	 * Adds the word "Optional" after the label
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
	 * Whether error styling should apply to this select box. The string appears as an inline error message.
	 */
	error?: string;
	/**
	 * Whether success styling should apply to this select box. The string appears as an inline success message. This prop should not have a value set at the same time as the error prop. In the event that both are set, errors take precedence.
	 */
	success?: string;
	children: JSX.Element | JSX.Element[];
	/**
	 * Should the theme change to dark when the user has prefers-color-scheme: dark set?
	 * Defaults to false for backwards compatibility
	 */
	supportDarkMode?: boolean;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-select--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/663879-select-box/b/10875c) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/select/Select.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Select boxes allow the user to make a choice from a long list of similar options.
 *
 * The following themes are supported: `default light`, `default dark`
 */
export const Select = ({
	id,
	label: labelText,
	optional = false,
	hideLabel = false,
	supporting,
	error,
	success,
	cssOverrides,
	children,
	supportDarkMode = false,
	...props
}: SelectProps): EmotionJSX.Element => {
	const selectId = id ?? generateSourceId();
	return (
		<>
			<Label
				text={labelText}
				optional={!!optional}
				supporting={supporting}
				hideLabel={hideLabel}
				htmlFor={selectId}
				supportDarkMode={supportDarkMode}
			>
				{error && (
					<InlineError id={descriptionId(selectId)}>{error}</InlineError>
					// todo
				)}
				{!error && success && (
					<InlineSuccess id={descriptionId(selectId)}>{success}</InlineSuccess>
					// todo
				)}
			</Label>
			<div
				css={(theme: Theme) => [
					selectWrapper(supportDarkMode, theme.select),
					error ? errorChevron(supportDarkMode, theme.select) : '',
					!error && success
						? successChevron(supportDarkMode, theme.select)
						: '',
				]}
			>
				<select
					css={(theme: Theme) => [
						select(supportDarkMode, theme.select),
						error ? errorInput(supportDarkMode, theme.select) : '',
						!error && success
							? successInput(supportDarkMode, theme.select)
							: '',
						cssOverrides,
					]}
					aria-required={!optional}
					aria-invalid={!!error}
					aria-describedby={error || success ? descriptionId(selectId) : ''}
					id={selectId}
					{...props}
				>
					{children}
				</select>
				<SvgChevronDownSingle />
			</div>
		</>
	);
};
