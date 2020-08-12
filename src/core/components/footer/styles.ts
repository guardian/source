import { css } from "@emotion/core"
import { footerBrand, FooterTheme } from "@guardian/src-foundations/themes"
import { from, between } from "@guardian/src-foundations/mq"
import { space } from "@guardian/src-foundations"
import { height, width } from "@guardian/src-foundations/size"
import { textSans } from "@guardian/src-foundations/typography"

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

export const links = ({ footer }: { footer: FooterTheme } = footerBrand) => css`
	position: relative;
	border-style: solid;
	border-color: ${footer.border};
	border-width: 0 0 1px 0;

	/* TODO: viewport-specific layout for when footer supports content */
	/* border-width: 1px 0 1px 0;

	${from.desktop} {
		border-width: 1px;
	} */
`

export const copyright = css`
	${textSans.xsmall()};
	display: block;
	margin-top: ${space[5]}px;

	${from.desktop} {
		margin-top: ${space[1]}px;
	}
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
	position: absolute;
	top: -${height.ctaMedium / 2}px;
	right: 0;
	padding-left: ${space[2]}px;

	${textSans.medium({ fontWeight: "bold" })};
	color: ${footer.text};
	background-color: ${footer.background};
	text-decoration: none;
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
	background: ${footer.anchor};
	margin-left: ${space[2]}px;

	svg {
		height: ${height.iconSmall}px;
		width: ${width.iconSmall}px;
		fill: ${footer.background};
	}
`
