import { SerializedStyles } from '@emotion/react';
import { Props } from '@guardian/src-helpers';
import { LabelHTMLAttributes, ReactNode } from 'react';
import { SupportingText } from './SupportingText';
import { Text } from './Text';

export interface LabelProps
	extends LabelHTMLAttributes<HTMLLabelElement>,
		Props {
	/**
	 * The label text
	 */
	text: string;
	/**
	 * Additional text or component that appears below the label
	 */
	supporting?: string;
	/**
	 * Adds the word "Optional" after the label
	 */
	optional?: boolean;
	/**
	 * Visually hides the label
	 */
	hideLabel?: boolean;
	cssOverrides?: SerializedStyles | SerializedStyles[];
	children?: ReactNode;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-label-label-) •
 * [Design System](https://theguardian.design/2a1e5182b/p/40151e-label/b/86af7d) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/src-label) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-label)
 *
 * A label describes a user input field.
 *
 * Label is used by other Source components, such as TextInput. Only use Label
 * if you are building your own form components.
 *
 * The following themes are supported: `light`, `brand`.
 * */
export const Label = ({
	text,
	supporting,
	optional = false,
	hideLabel = false,
	cssOverrides,
	children,
	...props
}: LabelProps) => {
	return (
		<label css={cssOverrides} {...props}>
			<Text hideLabel={hideLabel} text={text} optional={optional} />
			{supporting ? (
				<SupportingText hideLabel={hideLabel}>
					{supporting}
				</SupportingText>
			) : (
				''
			)}
			{children}
		</label>
	);
};
