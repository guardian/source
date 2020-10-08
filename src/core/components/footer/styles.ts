import { css } from "@emotion/core"
import { space } from "@guardian/src-foundations"
import { footerBrand, FooterTheme } from "@guardian/src-foundations/themes"
import { from, between } from "@guardian/src-foundations/mq"
import { height, width } from "@guardian/src-foundations/size"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"

export const footer = ({
	footer,
}: { footer: FooterTheme } = footerBrand) => css`
	color: ${footer.text};
	background-color: ${footer.background};
	padding: 0 ${space[3]}px ${space[3]}px ${space[3]}px;

	${from.desktop} {
		padding-bottom: ${space[6]}px;
	}
`

const getMarginBottom = (initialSpace: number, withBackToTop: boolean) => {
	if (!withBackToTop) {
		return initialSpace;
	}

	return initialSpace - height.ctaMedium / 2
}
export const linksWrapper = (withBackToTop: boolean) => css`
	display: flex;
	align-items: center;
	margin-bottom: ${getMarginBottom(space[6], withBackToTop)}px;

	${from.desktop} {
		margin-bottom: ${getMarginBottom(space[1], withBackToTop)}px;
	}
`

export const links = ({ footer }: { footer: FooterTheme } = footerBrand) => css`
	border-style: solid;
	border-color: ${footer.border};
	border-width: 0 0 1px 0;
	flex: 1 1 auto;

	/* TODO: viewport-specific layout for when footer supports content */
	/* border-width: 1px 0 1px 0;

	${from.desktop} {
		border-width: 1px;
	} */
`

export const copyright = css`
	${textSans.xsmall()};
	display: block;
`

// ensure copyright text doesn't get too close to back to top link
export const copyrightExtraPadding = css`
	${between.mobile.and.tablet} {
		padding-right: ${height.ctaMedium}px;
	}
`

export const backToTop = ({
	footer,
}: { footer: FooterTheme } = footerBrand) => css`
	display: flex;
	align-items: center;
	height: ${height.ctaMedium}px;
	padding-left: ${space[2]}px;

	${textSans.small({ fontWeight: "bold" })};
	color: ${footer.anchor};
	background-color: ${footer.background};
	text-decoration: none;

	& :hover {
		color: ${footer.anchorHover};
	}

	& :focus {
		${focusHalo};
	}
`

export const backToTopIcon = ({
	footer,
}: { footer: FooterTheme } = footerBrand) => css`
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
`
