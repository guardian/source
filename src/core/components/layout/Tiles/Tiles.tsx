import { SerializedStyles } from '@emotion/react';
import { Breakpoint } from '@guardian/src-foundations/mq';
import { Props } from '@guardian/src-helpers';
import { HTMLAttributes } from 'react';
import {
	collapseBelowDesktopTiles,
	collapseBelowLeftColTiles,
	collapseBelowTabletTiles,
	collapseBelowWideTiles,
	tileGridColumns,
	tilesCollapseBelowDesktop,
	tilesCollapseBelowleftCol,
	tilesCollapseBelowTablet,
	tilesCollapseBelowWide,
	tilesGridContainer,
} from './styles';

export type Columns = 2 | 3 | 4 | 5;

type GridBreakpoint = Extract<
	Breakpoint,
	'mobile' | 'tablet' | 'desktop' | 'leftCol' | 'wide'
>;

type CollapseBreakpoint = Extract<
	GridBreakpoint,
	'tablet' | 'desktop' | 'leftCol' | 'wide'
>;

const collapseBelowMap: { [key in CollapseBreakpoint]: SerializedStyles } = {
	tablet: tilesCollapseBelowTablet,
	desktop: tilesCollapseBelowDesktop,
	leftCol: tilesCollapseBelowleftCol,
	wide: tilesCollapseBelowWide,
};

const collapseBelowColumnsMap: {
	[key in CollapseBreakpoint]: SerializedStyles;
} = {
	tablet: collapseBelowTabletTiles,
	desktop: collapseBelowDesktopTiles,
	leftCol: collapseBelowLeftColTiles,
	wide: collapseBelowWideTiles,
};

export interface TilesProps extends HTMLAttributes<HTMLDivElement>, Props {
	/**
	 * The number of columns you want.
	 */
	columns: Columns;
	/**
	 * Child components will be stacked in a single column at viewport widths narrower than the
	 * specified breakpoint (they will always be collapsed into a single column if the viewport is narrower than `mobileLandscape`).
	 */
	collapseUntil?: CollapseBreakpoint;
	/**
	 * **Deprecated**
	 *
	 * Use `collapseUntil` instead.
	 */
	collapseBelow?: CollapseBreakpoint;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-layout-tiles) •
 * [Design System](https://theguardian.design/2a1e5182b/p/00e9f5-tiles) •
 * [GitHub](https://github.com/guardian/source/tree/main/src/core/components/layout/Tiles) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-layout)
 *
 * Child components will be arranged with equal width and spacing with the specified number of columns,
 * wrapping onto a new row as necessary.
 *
 * Below `mobileLandscape`, child components will be collapsed into a single column.
 */
export const Tiles = ({
	columns,
	collapseBelow, // deprecated
	collapseUntil = collapseBelow,
	cssOverrides,
	children,
	...props
}: TilesProps) => {
	return (
		<div
			css={[
				tilesGridContainer,
				tileGridColumns[columns],
				collapseBelow ? collapseBelowColumnsMap[collapseBelow] : '',
				collapseBelow ? collapseBelowMap[collapseBelow] : '',
				cssOverrides,
			]}
			{...props}
		>
			{children}
		</div>
	);
};
