import React, { HTMLAttributes, ReactNode } from 'react';
import { SerializedStyles } from '@emotion/react';
import { Props } from '../../../../helpers';
import { tileGridColumns, tilesGridContainer } from './styles';
import {
	tilesCollapseBelowDesktop,
	collapseBelowDesktopTiles,
	tilesCollapseBelowleftCol,
	collapseBelowLeftColTiles,
	tilesCollapseBelowTablet,
	collapseBelowTabletTiles,
	tilesCollapseBelowWide,
	collapseBelowWideTiles,
} from '../tiles/styles';
import { Breakpoint } from '../../../../foundations/src/mq';

export type Columns = 2 | 3 | 4 | 5;

type GridBreakpoint = Extract<
	Breakpoint,
	'mobile' | 'tablet' | 'desktop' | 'leftCol' | 'wide'
>;

type CollapseBreakpoint = Extract<
	GridBreakpoint,
	'tablet' | 'desktop' | 'leftCol' | 'wide'
>;

interface TilesProps extends HTMLAttributes<HTMLDivElement>, Props {
	columns: Columns;
	cssOverrides?: SerializedStyles | SerializedStyles[];
	children: ReactNode;
	collapseBelow?: CollapseBreakpoint;
}

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

const Tiles = ({
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
			]}
			{...props}
		>
			{children}
		</div>
	);
};

const defaultProps = {};

Tiles.defaultProps = { ...defaultProps };

export { Tiles };
