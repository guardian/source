import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	between,
	focusHalo,
	from,
	height,
	space,
	textSans,
	width,
} from '@guardian/source-foundations';
import { footerThemeBrand } from './theme';

export const footer = (
	footer = footerThemeBrand.footer,
): SerializedStyles => css`
	color: ${footer.text};
	background-color: ${footer.background};
	padding: 0 ${space[3]}px ${space[3]}px ${space[3]}px;

	${from.desktop} {
		padding-bottom: ${space[6]}px;
	}
`;

export const linksWrapper = css`
	display: flex;
	align-items: center;
`;

export const linksWrapperSpace = css`
	margin-bottom: ${space[6]}px;
	${from.desktop} {
		margin-bottom: ${space[1]}px;
	}
`;

const backToTopSpace = (initial: number) => initial - height.ctaMedium / 2;

export const linksWrapperSpaceWithBackToTop = css`
	margin-bottom: ${backToTopSpace(space[6])}px;
	${from.desktop} {
		margin-bottom: ${backToTopSpace(space[1])}px;
	}
`;

export const links = (
	footer = footerThemeBrand.footer,
): SerializedStyles => css`
	border-style: solid;
	border-color: ${footer.border};
	border-width: 0 0 1px 0;
	flex: 1 1 auto;

	/* TODO: viewport-specific layout for when footer supports content */
	/* border-width: 1px 0 1px 0;

	${from.desktop} {
		border-width: 1px;
	} */
`;

export const copyright = css`
	${textSans.xxsmall()};
	display: block;
`;

// ensure copyright text doesn't get too close to back to top link
export const copyrightExtraPadding = css`
	${between.mobile.and.tablet} {
		padding-right: ${height.ctaMedium}px;
	}
`;

export const backToTop = (
	footer = footerThemeBrand.footer,
): SerializedStyles => css`
	display: flex;
	align-items: center;
	height: ${height.ctaMedium}px;
	padding-left: ${space[2]}px;

	${textSans.small({ fontWeight: 'bold' })};
	color: ${footer.anchor};
	background-color: ${footer.background};
	text-decoration: none;

	& :hover {
		color: ${footer.anchorHover};
	}

	& :focus {
		${focusHalo};
	}
`;

export const backToTopIcon = (
	footer = footerThemeBrand.footer,
): SerializedStyles => css`
	height: ${height.ctaMedium}px;
	width: ${width.ctaMedium}px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${height.ctaMedium}px;
	background: currentColor;
	margin-left: ${space[2]}px;

	svg {
		height: ${height.iconSmall}px;
		width: ${width.iconSmall}px;
		fill: ${footer.background};
	}
`;
