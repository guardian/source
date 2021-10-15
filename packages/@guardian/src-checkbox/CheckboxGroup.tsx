import { Children, cloneElement } from 'react';
import { InlineError } from '@guardian/src-user-feedback';
import {
	descriptionId,
	generateSourceId,
} from '@guardian/src-foundations/accessibility';
import { Legend } from '@guardian/src-label';
import { fieldset } from './styles';
import type { Props } from '@guardian/src-helpers';

export interface CheckboxGroupProps extends Props {
	id?: string;
	/**
	 * Gets passed as the name attribute for each checkbox
	 */
	name: string;
	/**
	 * Appears as a legend at the top of the checkbox group
	 */
	label?: string;
	/**
	 * Appears as a legend at the top of the checkbox group
	 */
	hideLabel?: boolean;
	/**
	 * Visually hides the label.
	 */
	supporting?: string;
	/**
	 * If passed, error styling should apply to this group. The string appears
	 * as an inline error message
	 */
	error?: string;
	children: JSX.Element | JSX.Element[];
}

export const CheckboxGroup = ({
	id,
	name,
	label,
	hideLabel,
	supporting,
	error,
	cssOverrides,
	children,
	...props
}: CheckboxGroupProps) => {
	const groupId = id || generateSourceId();
	const legend = label ? (
		<Legend text={label} supporting={supporting} hideLabel={hideLabel} />
	) : (
		''
	);

	const message =
		typeof error === 'string' ? (
			<InlineError id={descriptionId(groupId)}>{error}</InlineError>
		) : (
			''
		);

	return (
		<fieldset css={[fieldset, cssOverrides]} id={groupId} {...props}>
			{legend}
			{message}
			{Children.map(children, (child) => {
				return cloneElement(
					child,
					Object.assign(
						error
							? {
									error: true,
									'aria-describedby': descriptionId(groupId),
							  }
							: {},
						{
							name,
						},
					),
				);
			})}
		</fieldset>
	);
};
