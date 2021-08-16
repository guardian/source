import { Props } from '@guardian/src-helpers';
import { HTMLAttributes } from 'react';
import {
	container,
	containerBackground,
	containerBorderColor,
	containerSideBorders,
	containerTopBorder,
} from './styles';

export interface ContainerProps extends HTMLAttributes<HTMLElement>, Props {
	/**
	 * **Deprecated**
	 *
	 * Use `sideBorders` instead.
	 */
	border?: boolean;
	sideBorders?: boolean;
	topBorder?: boolean;
	backgroundColor?: string;
	borderColor?: string;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-layout-container) •
 * [Design System](https://theguardian.design/2a1e5182b/p/440a83-container) •
 * [GitHub](https://github.com/guardian/source/tree/main/src/core/components/layout/Container) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-layout)
 *
 * Centres the page content and applies a width that corresponds to the grid at the current breakpoint.
 */
export const Container = ({
	border = false,
	sideBorders = false,
	topBorder = false,
	backgroundColor,
	borderColor,
	cssOverrides,
	children,
	...props
}: ContainerProps) => {
	return (
		<section
			css={[
				backgroundColor && containerBackground(backgroundColor),
				cssOverrides,
			]}
			{...props}
		>
			<div
				css={[
					container,
					backgroundColor && containerBackground(backgroundColor),
					topBorder && containerTopBorder,
					(sideBorders || border) && containerSideBorders,
					borderColor && containerBorderColor(borderColor),
				]}
			>
				{children}
			</div>
		</section>
	);
};
