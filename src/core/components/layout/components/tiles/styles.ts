import { css, SerializedStyles } from "@emotion/react";
import { Columns } from "./tiles";
import { from, until } from "@guardian/src-foundations/mq";
import { space } from "@guardian/src-foundations";

const collapseBelowTilesSpacing = css`
	display: block;
	& > * + * {
		margin-left: 0;
	}
	& > * {
		margin-bottom: ${space[5]}px;
	}
`;

export const collapseBelowTabletTiles = css`
	${until.tablet} {
		${collapseBelowTilesSpacing}
	}
`;
export const collapseBelowDesktopTiles = css`
	${until.desktop} {
		${collapseBelowTilesSpacing}
	}
`;
export const collapseBelowLeftColTiles = css`
	${until.leftCol} {
		${collapseBelowTilesSpacing}
	}
`;
export const collapseBelowWideTiles = css`
	${until.wide} {
		${collapseBelowTilesSpacing}
	}
`;

const collapseBelowWidth = css`
	width: 100% !important;
`;

export const tilesCollapseBelowTablet = css`
	& > * {
		${until.tablet} {
			${collapseBelowWidth}
		}
	}
`;
export const tilesCollapseBelowDesktop = css`
	& > * {
		${until.desktop} {
			${collapseBelowWidth}
		}
	}
`;
export const tilesCollapseBelowleftCol = css`
	& > * {
		${until.leftCol} {
			${collapseBelowWidth}
		}
	}
`;
export const tilesCollapseBelowWide = css`
	& > * {
		${until.wide} {
			${collapseBelowWidth}
		}
	}
`;

export const tilesGridContainer = css`
	width: 100%;
	${from.mobileLandscape} {
		@supports (display: grid) {
			display: grid;
			row-gap: ${space[5]}px;
			column-gap: ${space[5]}px;
		}
	}
`;

const gridColumnsStyle = (columns: Columns) => css`
	${from.mobileLandscape} {
		grid-template-columns: repeat(${columns}, 1fr);
	}
`;

export const tileGridColumns: { [key in Columns]: SerializedStyles } = {
	2: gridColumnsStyle(2),
	3: gridColumnsStyle(3),
	4: gridColumnsStyle(4),
	5: gridColumnsStyle(5),
};
