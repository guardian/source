import { css } from "@emotion/core"
import { footerBrand, FooterTheme } from "@guardian/src-foundations/themes"
import { from } from "@guardian/src-foundations/mq"
import { space } from "@guardian/src-foundations"
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

export const copyright = css`
	${textSans.xsmall()};
`
