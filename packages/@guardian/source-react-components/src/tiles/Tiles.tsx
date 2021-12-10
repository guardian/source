import type { SerializedStyles } from '@emotion/react';
import type { Breakpoint } from '@guardian/source-foundations';
import type { HTMLAttributes } from 'react';
import type { Props } from '../@types/Props';
import {
	collapseUntilDesktopTiles,
	collapseUntilLeftColTiles,
	collapseUntilTabletTiles,
	collapseUntilWideTiles,
	tileGridColumns,
	tilesCollapseUntilDesktop,
	tilesCollapseUntilleftCol,
	tilesCollapseUntilTablet,
	tilesCollapseUntilWide,
	tilesGridContainer,
} from './styles';
import type { Columns } from './types';

type GridBreakpoint = Extract<
	Breakpoint,
	'mobile' | 'tablet' | 'desktop' | 'leftCol' | 'wide'
>;

type CollapseBreakpoint = Extract<
	GridBreakpoint,
	'tablet' | 'desktop' | 'leftCol' | 'wide'
>;

const collapseUntilMap: { [key in CollapseBreakpoint]: SerializedStyles } = {
	tablet: tilesCollapseUntilTablet,
	desktop: tilesCollapseUntilDesktop,
	leftCol: tilesCollapseUntilleftCol,
	wide: tilesCollapseUntilWide,
};

const collapseUntilColumnsMap: {
	[key in CollapseBreakpoint]: SerializedStyles;
} = {
	tablet: collapseUntilTabletTiles,
	desktop: collapseUntilDesktopTiles,
	leftCol: collapseUntilLeftColTiles,
	wide: collapseUntilWideTiles,
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
 * [GitHub](https://github.com/guardian/source/tree/main/packages/%40guardian/src-layout/Tiles) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-layout)
 *
 * Child components will be arranged with equal width and spacing with the specified number of columns,
 * wrapping onto a new row as necessary.
 *
 * Until `mobileLandscape`, child components will be collapsed into a single column.
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
				collapseUntil ? collapseUntilColumnsMap[collapseUntil] : '',
				collapseUntil ? collapseUntilMap[collapseUntil] : '',
				cssOverrides,
			]}
			{...props}
		>
			{children}
		</div>
	);
};
