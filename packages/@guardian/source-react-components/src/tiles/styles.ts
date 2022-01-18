import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { from, space, until } from '@guardian/source-foundations';
import type { Columns } from './types';

const collapseUntilTilesSpacing = css`
	display: block;
	& > * + * {
		margin-left: 0;
	}
	& > * {
		margin-bottom: ${space[5]}px;
	}
`;

export const collapseUntilTabletTiles = css`
	${until.tablet} {
		${collapseUntilTilesSpacing}
	}
`;
export const collapseUntilDesktopTiles = css`
	${until.desktop} {
		${collapseUntilTilesSpacing}
	}
`;
export const collapseUntilLeftColTiles = css`
	${until.leftCol} {
		${collapseUntilTilesSpacing}
	}
`;
export const collapseUntilWideTiles = css`
	${until.wide} {
		${collapseUntilTilesSpacing}
	}
`;

const collapseUntilWidth = css`
	width: 100% !important;
`;

export const tilesCollapseUntilTablet = css`
	& > * {
		${until.tablet} {
			${collapseUntilWidth}
		}
	}
`;
export const tilesCollapseUntilDesktop = css`
	& > * {
		${until.desktop} {
			${collapseUntilWidth}
		}
	}
`;
export const tilesCollapseUntilleftCol = css`
	& > * {
		${until.leftCol} {
			${collapseUntilWidth}
		}
	}
`;
export const tilesCollapseUntilWide = css`
	& > * {
		${until.wide} {
			${collapseUntilWidth}
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

const gridColumnsStyle = (columns: Columns): SerializedStyles => css`
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
