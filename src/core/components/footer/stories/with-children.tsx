import React from "react"
import { css } from "@emotion/react"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { space } from "@guardian/src-foundations"
import { textSans } from "@guardian/src-foundations/typography"
import { from } from "@guardian/src-foundations/mq"
import { brandText, brandBorder } from "@guardian/src-foundations/palette"
import { Footer } from "../index"

const container = css`
	${from.desktop} {
		border-style: solid;
		border-color: ${brandBorder.primary};
		border-width: 0 1px 0 1px;
	}
`

const para = css`
	${textSans.small({ lineHeight: "tight" })};
	max-width: 58.75rem;

	${from.desktop} {
		padding-left: ${space[4]}px;
	}
`

const ul = css`
	list-style: none;
	padding: 0;
	border-top: 1px solid ${brandBorder.primary};

	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-areas:
		"link1 link3"
		"link2 link4";

	${from.desktop} {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-areas: "link1 link2 link3 link4";
		margin-bottom: 0;
	}
`

const li = css`
	padding: ${space[1]}px 0 ${space[4]}px 0;
	border-style: solid;
	border-color: ${brandBorder.primary};
	border-width: 0;

	${from.desktop} {
		padding: ${space[2]}px 0 ${space[4]}px ${space[4]}px;
	}
`

const anchor = css`
	${textSans.small({ lineHeight: "regular" })};
	color: ${brandText.anchorPrimary};
	text-decoration: none;

	& :hover {
		color: ${brandText.anchorPrimaryHover};
	}
`

const link1 = css`
	grid-area: link1;
	border-right-width: 1px;
`
const link2 = css`
	grid-area: link2;
	border-right-width: 1px;
`
const link3 = css`
	grid-area: link3;
	padding-left: ${space[4]}px;

	${from.desktop} {
		border-right-width: 1px;
	}
`
const link4 = css`
	grid-area: link4;
	padding-left: ${space[4]}px;
`

const footerContents = (
	<div css={container}>
		<p css={para}>
			<strong>
				Promotion terms and conditions Offer subject to availability.
			</strong>
			<br />
			Guardian News and Media Ltd (&quot;GNM&quot;) reserves the right to
			withdraw this promotion at any time. Full promotion terms and
			conditions for our monthly and annual offers.
		</p>
		<ul css={ul}>
			<li css={[li, link1]}>
				<a css={anchor} href="/">
					Privacy policy
				</a>
			</li>
			<li css={[li, link2]}>
				<a css={anchor} href="/">
					Contact us
				</a>
			</li>
			<li css={[li, link3]}>
				<a css={anchor} href="/">
					Frequently asked questions
				</a>
			</li>
			<li css={[li, link4]}>
				<a css={anchor} href="/">
					Terms &amp; conditions
				</a>
			</li>
		</ul>
	</div>
)

export const withChildrenBlue = () => <Footer>{footerContents}</Footer>

withChildrenBlue.story = {
	name: "with children blue",
	parameters: {
		backgrounds: {
			default: "brand",
			values: [storybookBackgrounds.brand],
		},
	},
}

export const withChildrenBlueTablet = () => <Footer>{footerContents}</Footer>

withChildrenBlueTablet.story = {
	name: "with children blue tablet",
	parameters: {
		backgrounds: {
			default: "brand",
			values: [storybookBackgrounds.brand],
		},
		viewport: { defaultViewport: "tablet" },
	},
}

export const withChildrenBlueMobile = () => <Footer>{footerContents}</Footer>

withChildrenBlueMobile.story = {
	name: "with children blue mobile",
	parameters: {
		backgrounds: {
			default: "brand",
			values: [storybookBackgrounds.brand],
		},
		viewport: { defaultViewport: "mobileMedium" },
	},
}
