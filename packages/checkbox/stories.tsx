import React from "react"
import { css } from "@emotion/core"

import { CheckboxGroup, Checkbox } from "./index"

export default {
	title: "Checkbox",
}

const checkboxes = [
	<Checkbox label="Guardian Today: UK" value="today_uk" />,
	<Checkbox label="Guardian Today: US" value="today_us" />,
]

const checkboxesWithSupportingText = [
	<Checkbox
		value="jobs"
		label="Jobs"
		supporting="Receive tips, Job Match recommendations, and advice from Guardian Jobs on taking your next career step."
	/>,
	<Checkbox
		value="holidays"
		label="Holidays & Vacations"
		supporting="Ideas and inspiration for your next trip away, as well as the latest offers from Guardian Holidays"
		defaultChecked
	/>,
	<Checkbox
		value="events"
		label="Events & Masterclasses"
		supporting="Learn from leading minds at our Guardian live events, including discussions and debates, courses and training"
	/>,
]

const defaultLight = () => (
	<CheckboxGroup name="emails">
		{checkboxes.map((checkbox, index) =>
			React.cloneElement(checkbox, { key: index }),
		)}
	</CheckboxGroup>
)

defaultLight.story = {
	name: "default light",
}

const narrow = css`
	width: 30rem;
`

const supportingTextLight = () => (
	<div css={narrow}>
		<CheckboxGroup name="emails">
			{checkboxesWithSupportingText.map((checkbox, index) =>
				React.cloneElement(checkbox, { key: index }),
			)}
		</CheckboxGroup>
	</div>
)

supportingTextLight.story = {
	name: "supporting text light",
}

export { defaultLight, supportingTextLight }
