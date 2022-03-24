import type { SerializedStyles } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { Breakpoint } from '@guardian/source-foundations';
import type { HTMLAttributes } from 'react';
import type { Props } from '../@types/Props';
import {
	collapseBelowColumnsCSS,
	collapseBelowDesktop,
	collapseBelowleftCol,
	collapseBelowSpaceY,
	collapseBelowTablet,
	collapseBelowWide,
	columns,
} from './styles';

type GridBreakpoint = Extract<
	Breakpoint,
	'mobile' | 'tablet' | 'desktop' | 'leftCol' | 'wide'
>;

export type CollapseBreakpoint = Extract<
	GridBreakpoint,
	'tablet' | 'desktop' | 'leftCol' | 'wide'
>;

export type ColumnsSpaceY = 1 | 2 | 3 | 4 | 5 | 6 | 9 | 12 | 24;

const collapseBelowMap: { [key in CollapseBreakpoint]: SerializedStyles } = {
	tablet: collapseBelowTablet,
	desktop: collapseBelowDesktop,
	leftCol: collapseBelowleftCol,
	wide: collapseBelowWide,
};

const collapseBelowColumnsMap: {
	[key in CollapseBreakpoint]: SerializedStyles;
} = {
	tablet: collapseBelowColumnsCSS('tablet'),
	desktop: collapseBelowColumnsCSS('desktop'),
	leftCol: collapseBelowColumnsCSS('leftCol'),
	wide: collapseBelowColumnsCSS('wide'),
};

export interface ColumnsProps extends HTMLAttributes<HTMLDivElement>, Props {
	/**
	 * Child components will be stacked in a single column at viewport widths
	 * narrower than the specified breakpoint (they will always be collapsed
	 * into a single column if the viewport is narrower than `mobileLandscape`).
	 */
	collapseUntil?: CollapseBreakpoint;
	/**
	 * **Deprecated**
	 *
	 * Use `collapseUntil` instead.
	 *
	 * @deprecated Use `collapseUntil` instead.
	 */
	collapseBelow?: CollapseBreakpoint;
	/**
	 * Vertical [units of
	 * space](https://www.theguardian.design/2a1e5182b/p/449bd5-space) between
	 * between columns vertically when collapsed (one unit is 4px).
	 */
	spaceY?: ColumnsSpaceY;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-columns) •
 * [Design System](https://theguardian.design/2a1e5182b/p/41cd49-columns) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/columns/Columns.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * `Columns` arranges child `Column`s side by side on a single row, with the
 * specified width.
 *
 * They become really useful when used in conjunction with the [Container](https://guardian.github.io/source/?path=/docs/packages-source-react-components-container)
 * component. This ensures the columns conform to the Guardian's grid layouts at
 * every breakpoint.
 */
export const Columns = ({
	collapseBelow,
	collapseUntil = collapseBelow, // deprecated
	cssOverrides,
	children,
	spaceY,
	...props
}: ColumnsProps): EmotionJSX.Element => {
	return (
		<div
			css={[
				columns,
				collapseUntil ? collapseBelowColumnsMap[collapseUntil] : '',
				collapseUntil ? collapseBelowMap[collapseUntil] : '',
				spaceY ? collapseBelowSpaceY[spaceY] : '',
				cssOverrides,
			]}
			{...props}
		>
			{children}
		</div>
	);
};
