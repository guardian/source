import React from "react"
import { Accordion, AccordionRow } from "./index"

export default {
	title: "Accordion",
	component: Accordion,
}

const defaultLight = () => (
	<Accordion
		label="Collecting from multiple newsagents"
		backgroundColour="grey"
		id="accordionbody1"
	>
		<AccordionRow>
			Present your card to a newsagent each time you collect the paper.
			The newsagent will scan your card and will be reimbursed for each
			transaction automatically.
		</AccordionRow>
		<AccordionRow>
			<a href="">Find your nearest participating retailer</a>
		</AccordionRow>
	</Accordion>
)

defaultLight.story = {
	name: `default light`,
}

export { defaultLight }
