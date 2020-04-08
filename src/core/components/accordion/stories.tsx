import React from "react"
import { Accordion, AccordionRow } from "./index"

export default {
	title: "Accordion",
	component: Accordion,
}

const defaultLight = () => (
	<Accordion>
		<AccordionRow label="Collecting from multiple newsagents">
			Present your card to a newsagent each time you collect the paper.
			The newsagent will scan your card and will be reimbursed for each
			transaction automatically.
		</AccordionRow>
		<AccordionRow label="Delivery from your retailer">
			Simply give your preferred store / retailer the barcode printed on
			your subscription letter.
		</AccordionRow>
	</Accordion>
)

defaultLight.story = {
	name: `default light`,
}

export { defaultLight }
