import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { descriptionId, generateSourceId } from '@guardian/source-foundations';
import { Children, cloneElement } from 'react';
import type { Props } from '../@types/Props';
import { Legend } from '../label/Legend';
import { InlineError } from '../user-feedback/InlineError';
import { fieldset } from './styles';

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

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-checkboxgroup--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/466fad-checkbox/b/33fc2f) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/checkbox/CheckboxGroup.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Checkboxes allow users to select multiple options from a list of individual
 * items or to indicate agreement of terms and  services.
 *
 * The following themes are supported: `default`, `brand`
 */
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
}: CheckboxGroupProps): EmotionJSX.Element => {
	const groupId = id ?? generateSourceId();
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
