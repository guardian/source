import { HTMLAttributes, ReactNode } from 'react';
import { SerializedStyles } from '@emotion/react';
import {
	columns,
	column,
	collapseBelowTablet,
	collapseBelowDesktop,
	collapseBelowleftCol,
	collapseBelowWide,
	collapseBelowColumns,
} from './styles';
import { Breakpoint } from '@guardian/src-foundations/mq';
import { Props } from '@guardian/src-helpers';

type GridBreakpoint = Extract<
	Breakpoint,
	'mobile' | 'tablet' | 'desktop' | 'leftCol' | 'wide'
>;

export type CollapseBreakpoint = Extract<
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

const Columns = ({
	collapseBelow,
	cssOverrides,
	children,
	spaceY,
	...props
}: ColumnsProps) => {
	return (
		<div
			css={[
				columns,
				collapseBelow
					? collapseBelowColumns(collapseBelow, spaceY)
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
