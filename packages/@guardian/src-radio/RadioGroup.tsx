import { Children, cloneElement, FieldsetHTMLAttributes } from 'react';
import { Legend } from '@guardian/src-label';
import { InlineError } from '@guardian/src-user-feedback';
import {
	descriptionId,
	generateSourceId,
} from '@guardian/src-foundations/accessibility';
import { fieldset, horizontal, vertical } from './styles';
import { Props } from '@guardian/src-helpers';

type Orientation = 'vertical' | 'horizontal';

const orientationStyles = {
	vertical: vertical,
	horizontal: horizontal,
};

export interface RadioGroupProps
	extends FieldsetHTMLAttributes<HTMLFieldSetElement>,
		Props {
	id?: string;
	/**
	 * Appears as a legend at the top of the radio group
	 */
	label?: string;
	/**
	 * Visually hides the label
	 */
	hideLabel?: boolean;
	/**
	 * Additional text or component that appears below the label
	 */
	supporting?: string | JSX.Element;
	/**
	 * The direction in which radio buttons are stacked
	 */
	orientation?: Orientation;
	/**
	 * If passed, error styling should applies to this radio group. The string appears as an inline error message.
	 */
	error?: string;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-radio-radiogroup--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/2891dd-radio-button/b/46940d) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/%40guardian/src-radio) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-radio)
 *
 * Radio buttons allow users to make a single selection from a set of options.
 *
 * The following themes are supported: `default`, `brand`
 */
export const RadioGroup = ({
	id,
	name,
	label,
	hideLabel = false,
	supporting,
	orientation = 'vertical',
	error,
	cssOverrides,
	children,
	...props
}: RadioGroupProps) => {
	const groupId = id || generateSourceId();
	const legend = label ? (
		<Legend text={label} supporting={supporting} hideLabel={hideLabel} />
	) : (
		''
	);
	const message = error && (
		<InlineError id={descriptionId(groupId)}>{error}</InlineError>
	);

	return (
		<fieldset
			aria-invalid={!!error}
			id={groupId}
			css={(theme) => [
				fieldset(theme.radio && theme),
				orientationStyles[orientation],
				cssOverrides,
			]}
			{...props}
		>
			{legend}
			{message}
			{Children.map(children, (child) => {
				return cloneElement(
					child as React.ReactElement,
					Object.assign(
						error
							? {
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
