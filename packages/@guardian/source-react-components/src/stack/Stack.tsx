import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { HTMLAttributes } from 'react';
import type { Props } from '../@types/Props';
import { stack, stackSpace } from './styles';

export type StackSpace = 1 | 2 | 3 | 4 | 5 | 6 | 9 | 12 | 24;

export interface StackProps extends HTMLAttributes<HTMLDivElement>, Props {
	/**
	 * [Units of space](https://www.theguardian.design/2a1e5182b/p/449bd5-space) between inline items (one unit is 4px).
	 */
	space?: StackSpace;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-stack) •
 * [Design System](https://theguardian.design/2a1e5182b/p/827581-stack) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/stack/Stack.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * `Stack` components will be stacked one on top of the other.
 */
export const Stack = ({
	cssOverrides,
	children,
	space,
	...props
}: StackProps): EmotionJSX.Element => {
	return (
		<div css={[stack, space ? stackSpace[space] : '', cssOverrides]} {...props}>
			{children}
		</div>
	);
};
