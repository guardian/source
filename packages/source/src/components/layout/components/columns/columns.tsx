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
import { Breakpoint } from '../../../../foundations/src/mq';
import { Props } from '../../../../helpers';

type GridBreakpoint = Extract<
	Breakpoint,
	'mobile' | 'tablet' | 'desktop' | 'leftCol' | 'wide'
>;

type CollapseBreakpoint = Extract<
	GridBreakpoint,
	'tablet' | 'desktop' | 'leftCol' | 'wide'
>;

export interface ColumnsProps extends HTMLAttributes<HTMLDivElement>, Props {
	collapseBelow?: CollapseBreakpoint;
	cssOverrides?: SerializedStyles | SerializedStyles[];
	children: ReactNode;
}

const collapseBelowMap: { [key in CollapseBreakpoint]: SerializedStyles } = {
	tablet: collapseBelowTablet,
	desktop: collapseBelowDesktop,
	leftCol: collapseBelowleftCol,
	wide: collapseBelowWide,
};

const collapseBelowColumnsMap: {
	[key in CollapseBreakpoint]: SerializedStyles;
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
	...props
}: ColumnsProps) => {
	return (
		<div
			css={[
				columns,
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

interface ColumnProps extends HTMLAttributes<HTMLDivElement>, Props {
	width?: number;
	cssOverrides?: SerializedStyles | SerializedStyles[];
	children: ReactNode;
}

const Column = ({
	width = 0,
	cssOverrides,
	children,
	...props
}: ColumnProps) => {
	return (
		<div css={[column(width), cssOverrides]} {...props}>
			{children}
		</div>
	);
};

Columns.defaultProps = {};
Column.defaultProps = {};

export { Columns, Column };
