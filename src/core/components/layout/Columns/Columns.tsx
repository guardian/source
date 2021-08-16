import { HTMLAttributes, ReactNode } from 'react';
import { SerializedStyles } from '@emotion/react';
import {
	columns,
	column,
	collapseBelowTablet,
	collapseBelowDesktop,
	collapseBelowleftCol,
	collapseBelowWide,
	setWidth,
	setSpan,
	flexGrow,
	collapseBelowColumnsCSS,
	collapseBelowSpaceY,
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
	collapseBelow?: CollapseBreakpoint;
	cssOverrides?: SerializedStyles | SerializedStyles[];
	children: ReactNode;
	spaceY?: ColumnsSpaceY;
}

export const Columns = ({
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
				collapseBelow ? collapseBelowColumnsMap[collapseBelow] : '',
				collapseBelow ? collapseBelowMap[collapseBelow] : '',
				spaceY ? collapseBelowSpaceY[spaceY] : '',
				cssOverrides,
			]}
			{...props}
		>
			{children}
		</div>
	);
};

export interface ColumnProps extends HTMLAttributes<HTMLDivElement>, Props {
	width?: number | number[];
	span?: number | number[];
}

export const Column = ({
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
