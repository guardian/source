import React from 'react';
import { SerializedStyles } from '@emotion/react';
import { Props } from '@guardian/src-helpers';
import { HTMLAttributes } from 'react';
import { legend } from './styles';
import { SupportingText } from './SupportingText';
import { Text } from './Text';

export interface LegendProps extends HTMLAttributes<HTMLLegendElement>, Props {
	/**
	 * The label text
	 */
	text: string;
	/**
	 * Additional text or component that appears below the label
	 */
	supporting?: string | JSX.Element;
	/**
	 * Adds the word "Optional" after the label
	 */
	optional?: boolean;
	/**
	 * Visually hides the label
	 */
	hideLabel?: boolean;
	cssOverrides?: SerializedStyles | SerializedStyles[];
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-label-legend-) •
 * [Design System](https://theguardian.design/2a1e5182b/p/40151e-label/b/86af7d) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/src-label) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-label)
 *
 * A legend describes a group of fields, such as a checkbox group or radio group.
 *
 * Legend is used by other Source components, such as RadioGroup. Only use Legend
 * if you are building your own form components.
 *
 * The following themes are supported: `light`, `brand`.
 * */
export const Legend = ({
	text,
	supporting,
	optional = false,
	hideLabel = false,
	cssOverrides,
	...props
}: LegendProps) => {
	return (
		<>
			<legend css={[legend, cssOverrides]} {...props}>
				<Text text={text} optional={optional} hideLabel={hideLabel} />
			</legend>
			{supporting ? (
				<SupportingText hideLabel={hideLabel}>
					{supporting}
				</SupportingText>
			) : (
				''
			)}
		</>
	);
};
