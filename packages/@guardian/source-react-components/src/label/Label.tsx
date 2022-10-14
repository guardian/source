import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { SupportingText } from './SupportingText';
import { Text } from './Text';
import type { LabelProps } from './types';

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-label--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/40151e-label/b/86af7d) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/label/Label.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
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
}: LabelProps): EmotionJSX.Element => {
	return (
		<label css={cssOverrides} {...props}>
			<Text hideLabel={hideLabel} text={text} optional={optional} />
			{supporting ? (
				<SupportingText hideLabel={hideLabel}>{supporting}</SupportingText>
			) : (
				''
			)}
			{children}
		</label>
	);
};
