import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { descriptionId, generateSourceId } from '@guardian/source-foundations';
import type { FieldsetHTMLAttributes } from 'react';
import { Children, cloneElement } from 'react';
import type { Props } from '../@types/Props';
import type { Theme } from '../@types/Theme';
import { Inline } from '../inline/Inline';
import { Legend } from '../label/Legend';
import { Stack } from '../stack/Stack';
import { InlineError } from '../user-feedback/InlineError';
import { fieldset } from './styles';

type Orientation = 'vertical' | 'horizontal';

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
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-radiogroup--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/2891dd-radio-button/b/46940d) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/radio/RadioGroup.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
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
}: RadioGroupProps): EmotionJSX.Element => {
	const groupId = id ?? generateSourceId();
	const legend = label ? (
		<Legend text={label} supporting={supporting} hideLabel={hideLabel} />
	) : (
		''
	);
	const message = error && (
		<InlineError id={descriptionId(groupId)}>{error}</InlineError>
	);

	const radioContainers = (
		<>
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
		</>
	);

	return (
		<fieldset
			aria-invalid={!!error}
			id={groupId}
			css={(theme: Theme) => [fieldset(theme.radio), cssOverrides]}
			{...props}
		>
			{legend}
			{message}
			{orientation === 'vertical' ? (
				<Stack>{radioContainers}</Stack>
			) : (
				<Inline space={5}>{radioContainers}</Inline>
			)}
		</fieldset>
	);
};
