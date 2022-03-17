import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { HTMLAttributes } from 'react';
import type { Props } from '../@types/Props';
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
	 *
	 * @deprecated Use `sideBorders` instead.
	 */
	border?: boolean;
	/**
	 * Add borders to the sides of the component
	 */
	sideBorders?: boolean;
	/**
	 * Add a border to the top of the component
	 */
	topBorder?: boolean;
	/**
	 * Set a background colour on the component
	 */
	backgroundColor?: string;
	/**
	 * Set the colour of any borders
	 */
	borderColor?: string;
	/**
	 * The element type to use.
	 */
	element?:
		| 'div'
		| 'article'
		| 'aside'
		| 'footer'
		| 'header'
		| 'nav'
		| 'section';
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-container) •
 * [Design System](https://theguardian.design/2a1e5182b/p/440a83-container) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/container/Container.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Centres the page content and applies a width that corresponds to the grid at the current breakpoint.
 */
export const Container = ({
	element: Element = 'section',
	border = false,
	sideBorders = false,
	topBorder = false,
	backgroundColor,
	borderColor,
	cssOverrides,
	children,
	...props
}: ContainerProps): EmotionJSX.Element => {
	return (
		<Element
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
		</Element>
	);
};
