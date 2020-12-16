import React from "react"
import { css } from "@emotion/react"
import { Accordion, AccordionRow } from "./index"
import { background } from "@guardian/src-foundations/palette"
import { body } from "@guardian/src-foundations/typography"
import { from } from "@guardian/src-foundations/mq"
import { space } from "@guardian/src-foundations"
import { Link } from "@guardian/src-link"

/* eslint-disable react/jsx-key */
const accordionRows = [
	<AccordionRow label="Collecting from multiple newsagents">
		<p>
			Present your card to a newsagent each time you collect the paper.
			The newsagent will scan your card and will be reimbursed for each
			transaction automatically.
		</p>
		<p>
			<Link href="">Find your nearest participating retailer</Link>
		</p>
	</AccordionRow>,
	<AccordionRow label="Delivery from your retailer">
		<p>
			Simply give your preferred store / retailer the barcode printed on
			your subscription letter.
		</p>
		<p>
			<Link href="">Find your nearest participating retailer</Link>
		</p>
	</AccordionRow>,
]
/* eslint-enable react/jsx-key */

const accordion = (
	<Accordion>
		{accordionRows.map((row, i) => React.cloneElement(row, { key: i }))}
	</Accordion>
)

const accordionHideToggleLabel = (
	<Accordion hideToggleLabel={true}>
		{accordionRows.map((row, i) => React.cloneElement(row, { key: i }))}
	</Accordion>
)

const container = css`
	width: 100%;

	${from.tablet} {
		width: 30em;
	}

	p {
		${body.medium({ lineHeight: "regular" })};
		margin-bottom: ${space[3]}px;
	}
`

const lightGrey = css`
	background-color: ${background.secondary};
`

export default {
	title: "Accordion",
	component: Accordion,
}

const defaultLight = () => <div css={container}>{accordion}</div>

defaultLight.story = {
	name: `default light`,
}
const defaultGrey = () => <div css={[container, lightGrey]}>{accordion}</div>

defaultGrey.story = {
	name: `default grey`,
}

const hideToggleLabelLight = () => (
	<div css={container}>{accordionHideToggleLabel}</div>
)

hideToggleLabelLight.story = {
	name: `hide toggle label light`,
}

const defaultMobileLight = () => <div css={container}>{accordion}</div>

defaultMobileLight.story = {
	name: `default mobile light`,
	parameters: {
		viewport: { defaultViewport: "mobileMedium" },
	},
}

export { defaultLight, defaultGrey, hideToggleLabelLight, defaultMobileLight }
