import React from "react"
import { css } from "@emotion/core"
import { Accordion, AccordionRow } from "./index"
import { neutral } from "@guardian/src-foundations/palette"

const main = css`
	display: flex;
	justify-content: center;
	width: 100%;
`

const container = css`
	background-color: ${neutral["97"]};
	width: 320px;
`

export default {
	title: "Accordion",
	component: Accordion,
}

const defaultLight = () => (
	<div css={main}>
		<div css={container}>
			<Accordion
				label="Collecting from multiple newsagents"
				id="accordionbody1"
			>
				<AccordionRow>
					Present your card to a newsagent each time you collect the
					paper. The newsagent will scan your card and will be
					reimbursed for each transaction automatically.
				</AccordionRow>
				<AccordionRow>
					<a href="">Find your nearest participating retailer</a>
				</AccordionRow>
			</Accordion>
		</div>
	</div>
)

defaultLight.story = {
	name: `default light`,
}

export { defaultLight }
