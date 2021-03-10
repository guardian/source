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
	setWidth,
	setSpan,
	flexGrow,
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

interface ColumnsProps extends HTMLAttributes<HTMLDivElement>, Props {
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
	width?: number | number[];
	span?: number | number[];
	cssOverrides?: SerializedStyles | SerializedStyles[];
	children: ReactNode;
}

const Column = ({
	width,
	span,
	cssOverrides,
	children,
	...props
}: ColumnProps) => {
	const columnCss = [column];
	if (width) {
		columnCss.push(setWidth(width));
	} else if (span) {
		columnCss.push(setSpan(span));
	} else {
		columnCss.push(flexGrow);
	}

	return (
		<div css={[columnCss, cssOverrides]} {...props}>
			{children}
		</div>
	);
};

Columns.defaultProps = {};
Column.defaultProps = {};

export { Columns, Column };
