import React from "react"
import { css } from "@emotion/core"

import { CheckboxGroup, Checkbox } from "../index"

/* eslint-disable react/jsx-key */
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
		checked={true}
	/>,
	<Checkbox
		value="events"
		label="Events & Masterclasses"
		supporting={
			<>
				Learn from leading minds at our{" "}
				<strong>Guardian live events</strong>, including discussions and
				debates, courses and training
			</>
		}
	/>,
]
/* eslint-enable react/jsx-key */

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

export { supportingTextLight }
