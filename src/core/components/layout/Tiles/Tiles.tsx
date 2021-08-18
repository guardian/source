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
	columns: Columns;
	collapseBelow?: CollapseBreakpoint;
}

export const Tiles = ({
	collapseBelow,
	cssOverrides,
	children,
	columns,
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
