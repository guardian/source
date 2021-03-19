import { HTMLAttributes, ReactNode } from 'react';
import { SerializedStyles } from '@emotion/react';
import {
	columns,
	column,
	collapseBelowTabletColumns,
	collapseBelowDesktopColumns,
	collapseBelowLeftColColumns,
	collapseBelowWideColumns,
	collapseBelowTablet,
	collapseBelowDesktop,
	collapseBelowleftCol,
	collapseBelowWide,
} from './styles';
import { Breakpoint } from '@guardian/src-foundations/mq';
import { Props } from '@guardian/src-helpers';

type GridBreakpoint = Extract<
	Breakpoint,
	'mobile' | 'tablet' | 'desktop' | 'leftCol' | 'wide'
>;

type CollapseBreakpoint = Extract<
	GridBreakpoint,
	'tablet' | 'desktop' | 'leftCol' | 'wide'
>;

export type ColumnsSpaceY = 1 | 2 | 3 | 4 | 5 | 6 | 9 | 12 | 24;

interface ColumnsProps extends HTMLAttributes<HTMLDivElement>, Props {
	collapseBelow?: CollapseBreakpoint;
	cssOverrides?: SerializedStyles | SerializedStyles[];
	children: ReactNode;
	spaceY?: ColumnsSpaceY;
}

const collapseBelowMap: { [key in CollapseBreakpoint]: SerializedStyles } = {
	tablet: collapseBelowTablet,
	desktop: collapseBelowDesktop,
	leftCol: collapseBelowleftCol,
	wide: collapseBelowWide,
};

const collapseBelowColumnsMap: {
	[key in CollapseBreakpoint]: (spaceY: ColumnsSpaceY) => SerializedStyles;
} = {
	tablet: collapseBelowTabletColumns,
	desktop: collapseBelowDesktopColumns,
	leftCol: collapseBelowLeftColColumns,
	wide: collapseBelowWideColumns,
};

const Columns = ({
	collapseBelow,
	cssOverrides,
	children,
	spaceY = 5,
	...props
}: ColumnsProps) => {
	return (
		<div
			css={[
				columns,
				collapseBelow
					? collapseBelowColumnsMap[collapseBelow](spaceY)
					: '',
				collapseBelow ? collapseBelowMap[collapseBelow] : '',
				cssOverrides,
			]}
			{...props}
		>
			{children}
		</div>
	);
};

interface ColumnProps extends HTMLAttributes<HTMLDivElement>, Props {
	width?: number | number[];
	cssOverrides?: SerializedStyles | SerializedStyles[];
	children: ReactNode;
}

const Column = ({ width, cssOverrides, children, ...props }: ColumnProps) => {
	return (
		<div css={[column(width), cssOverrides]} {...props}>
			{children}
		</div>
	);
};

Columns.defaultProps = {};
Column.defaultProps = {};

export { Columns, Column };
