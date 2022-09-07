import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { descriptionId, generateSourceId } from '@guardian/source-foundations';
import type { FieldsetHTMLAttributes } from 'react';
import { Children, cloneElement } from 'react';
import type { Props } from '../@types/Props';
import { Legend } from '../label/Legend';
import { InlineError } from '../user-feedback/InlineError';
import {
	containerTopMargin,
	fieldset,
	flexContainer,
	gridColumns,
	gridContainer,
} from './styles';

export type ChoiceCardColumns = 2 | 3 | 4 | 5;

export interface ChoiceCardGroupProps
	extends FieldsetHTMLAttributes<HTMLFieldSetElement>,
		Props {
	id?: string;
	/**
	 * Passed as the name attribute for each `<ChoiceCard />`
	 */
	name: string;
	/**
	 * Label describing the `ChoiceCardGroup`
	 */
	label?: string;
	/**
	 * Hide the label text visually
	 */
	hideLabel?: boolean;
	/**
	 * Additional text that appears below the `label` (does nothing without one).
	 */
	supporting?: string;
	/**
	 * If true, users may select more than one choice card (checkbox behaviour).
	 * By default, users may only select a single choice card (radio button behaviour).
	 */
	multi?: boolean;
	/**
	 * If passed, error styling should applies to this choice card group. The string appears as an inline error message.
	 */
	error?: string;
	/**
	 * To render a grid of choice cards, specify the number of columns.
	 * If this prop is not set, cards will appear on a single line.
	 */
	columns?: ChoiceCardColumns;
	children: JSX.Element | JSX.Element[];
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-choicecardgroup) •
 * [Design System](https://theguardian.design/2a1e5182b/p/65ffe9-choice-card) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/choice-card/ChoiceCardGroup.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components-card)
 *
 * The following themes are supported: `choiceCardDefault`.
 */
export const ChoiceCardGroup = ({
	id,
	name,
	label,
	hideLabel,
	supporting,
	multi,
	error,
	columns,
	cssOverrides,
	children,
	...props
}: ChoiceCardGroupProps): EmotionJSX.Element => {
	const groupId = id ?? generateSourceId();
	const topMargin =
		(label && !hideLabel) || supporting || error ? containerTopMargin : '';

	return (
		<fieldset css={[fieldset, cssOverrides]} id={groupId} {...props}>
			{label ? (
				<Legend text={label} supporting={supporting} hideLabel={hideLabel} />
			) : (
				''
			)}
			{typeof error === 'string' && (
				<InlineError id={descriptionId(groupId)}>{error}</InlineError>
			)}
			<div
				css={[
					columns ? [gridContainer, gridColumns[columns]] : flexContainer,
					topMargin,
				]}
			>
				{Children.map(children, (child) => {
					return cloneElement(
						child,
						Object.assign(
							{
								type: multi ? 'checkbox' : 'radio',
							},
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
			</div>
		</fieldset>
	);
};
