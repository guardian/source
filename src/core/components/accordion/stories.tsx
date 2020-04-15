import React from "react"
import { css } from "@emotion/core"
import { Accordion, AccordionRow } from "./index"
import { neutral } from "@guardian/src-foundations/palette"
import { textSans } from "@guardian/src-foundations/typography"
import { space } from "@guardian/src-foundations"

const main = css`
	display: flex;
	justify-content: center;
	width: 100%;
`

const container = css`
	background-color: ${neutral["97"]};
	width: 320px;

	p {
		${textSans.small()};
		margin-bottom: ${space[3]}px;
	}
`

export default {
	title: "Accordion",
	component: Accordion,
}

const defaultLight = () => (
	<div css={main}>
		<div css={container}>
			<Accordion>
				<AccordionRow label="Collecting from multiple newsagents">
					<p>
						Present your card to a newsagent each time you collect
						the paper. The newsagent will scan your card and will be
						reimbursed for each transaction automatically.
					</p>
					<p>
						<a href="">Find your nearest participating retailer</a>
					</p>
				</AccordionRow>
				<AccordionRow label="Delivery from your retailer">
					<p>
						Simply give your preferred store / retailer the barcode
						printed on your subscription letter.
					</p>
					<p>
						<a href="">Find your nearest participating retailer</a>
					</p>
				</AccordionRow>
			</Accordion>
		</div>
	</div>
)

defaultLight.story = {
	name: `default light`,
}

export { defaultLight }
