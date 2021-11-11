import { SelectHTMLAttributes } from 'react';
import { InlineError, InlineSuccess } from '@guardian/src-user-feedback';
import { Label } from '@guardian/src-label';
import {
	select,
	selectWrapper,
	errorChevron,
	successChevron,
	errorInput,
	successInput,
} from './styles';
import { Props } from '@guardian/src-helpers';
import { SvgChevronDownSingle } from '@guardian/src-icons';

import {
	visuallyHidden as _visuallyHidden,
	descriptionId,
	generateSourceId,
} from '@guardian/src-foundations/accessibility';

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
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-select-select--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/663879-select-box/b/10875c) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/%40guardian/src-select) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-select)
 *
 * Select boxes allow the user to make a choice from a long list of similar options.
 *
 * The following themes are supported: `light`
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
	...props
}: SelectProps) => {
	const selectId = id || generateSourceId();
	return (
		<Label
			text={labelText}
			optional={!!optional}
			supporting={supporting}
			hideLabel={hideLabel}
		>
			{error && (
				<InlineError id={descriptionId(selectId)}>{error}</InlineError>
			)}
			{!error && success && (
				<InlineSuccess id={descriptionId(selectId)}>
					{success}
				</InlineSuccess>
			)}
			<div
				css={(theme) => [
					selectWrapper(theme.select && theme),
					error ? errorChevron(theme.select && theme) : '',
					!error && success
						? successChevron(theme.select && theme)
						: '',
				]}
			>
				<select
					css={(theme) => [
						select(theme.select && theme),
						error ? errorInput(theme.select && theme) : '',
						!error && success
							? successInput(theme.select && theme)
							: '',
						cssOverrides,
					]}
					aria-required={!optional}
					aria-invalid={!!error}
					aria-describedby={
						error || success ? descriptionId(selectId) : ''
					}
					id={selectId}
					{...props}
				>
					{children}
				</select>
				<SvgChevronDownSingle />
			</div>
		</Label>
	);
};
