import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { HTMLAttributes } from 'react';
import type { Props } from '../@types/Props';
import { inline, inlineSpace } from './styles';
import type { InlineSpace } from './types';

export interface InlineProps extends HTMLAttributes<HTMLDivElement>, Props {
	/**
	 * [Units of space](https://www.theguardian.design/2a1e5182b/p/449bd5-space) between inline items (one unit is 4px).
	 */
	space?: InlineSpace;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-inline) •
 * [Design System](https://theguardian.design/2a1e5182b/p/99f3c1-inline) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/inline/Inline.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * `Inline` components will be laid out one next to the other.
 */
export const Inline = ({
	cssOverrides,
	children,
	space,
	...props
}: InlineProps): EmotionJSX.Element => {
	return (
		<div
			css={[inline, space ? inlineSpace[space] : '', cssOverrides]}
			{...props}
		>
			{children}
		</div>
	);
};
