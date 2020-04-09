import React from "react"
import { Accordion, AccordionRow } from "./index"
import { space } from "@guardian/src-foundations"
import { css } from "@emotion/core"

export default {
	title: "Accordion",
	component: Accordion,
}

const spacing = css`
	> * {
		margin-bottom: ${space[4]}px;
	}
`

const defaultLight = () => (
	<div css={spacing}>
		<Accordion
			label="Collecting from multiple newsagents"
			backgroundColour="grey"
		>
			<AccordionRow>
				Present your card to a newsagent each time you collect the
				paper. The newsagent will scan your card and will be reimbursed
				for each transaction automatically.
			</AccordionRow>
			<AccordionRow>
				<a href="">Find your nearest participating retailer</a>
			</AccordionRow>
		</Accordion>

		<Accordion label="Delivery from your retailer" backgroundColour="white">
			<AccordionRow>
				Simply give your preferred store / retailer the barcode printed
				on your subscription letter.
			</AccordionRow>
			<AccordionRow>
				<a href="">Find your nearest participating retailer</a>
			</AccordionRow>
		</Accordion>
	</div>
)

defaultLight.story = {
	name: `default light`,
}

export { defaultLight }
