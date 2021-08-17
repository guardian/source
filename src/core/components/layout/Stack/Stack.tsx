import { Props } from '@guardian/src-helpers';
import { HTMLAttributes } from 'react';
import { stack, stackSpace } from './styles';

export type StackSpace = 1 | 2 | 3 | 4 | 5 | 6 | 9 | 12 | 24;

export interface StackProps extends HTMLAttributes<HTMLDivElement>, Props {
	/**
	 * [Units of space](https://www.theguardian.design/2a1e5182b/p/449bd5-space) between inline items (one unit is 4px).
	 */
	space?: StackSpace;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-layout-stack) •
 * [Design System](https://theguardian.design/2a1e5182b/p/827581-stack) •
 * [GitHub](https://github.com/guardian/source/tree/main/src/core/components/layout/Stack) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-layout)
 *
 * `Stack` components will be stacked one on top of the other.
 */
export const Stack = ({
	cssOverrides,
	children,
	space,
	...props
}: StackProps) => {
	return (
		<div
			css={[stack, space ? stackSpace[space] : '', cssOverrides]}
			{...props}
		>
			{children}
		</div>
	);
};
