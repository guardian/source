import React, { useState, ChangeEvent } from "react"
import { css } from "@emotion/core"

import { CheckboxGroup, Checkbox } from "./index"

export default {
	title: "Checkbox",
}

/* eslint-disable react/jsx-key */
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

const errorLight = () => (
	<CheckboxGroup
		name="tandcs"
		error="Tick the box to accept the terms and conditions"
	>
		<Checkbox
			value="tandcs-accept"
			label="I understand the terms and conditions"
		/>
	</CheckboxGroup>
)

errorLight.story = {
	name: "error light",
}

const indeterminateLight = () => (
	<Checkbox
		indeterminate={true}
		value="indeterminate"
		label="Indeterminate"
	/>
)

indeterminateLight.story = {
	name: "indeterminate light",
}

const selectAll = () => {
	let [checked, setCheckCount] = useState([false, false])
	const selectableCheckboxes = [
		<Checkbox
			label="Guardian Today: UK"
			value="today_uk"
			onChange={event => handleCheckboxClick(event, 0)}
			checked={checked[0] === true}
		/>,
		<Checkbox
			label="Guardian Today: US"
			value="today_us"
			onChange={event => handleCheckboxClick(event, 1)}
			checked={checked[1] === true}
		/>,
	]
	const handleCheckboxClick = (
		event: ChangeEvent<HTMLInputElement>,
		pos: number,
	) => {
		if (event.target.checked) {
			const newChecked = checked.slice()
			newChecked[pos] = true
			setCheckCount(newChecked)
		} else {
			const newChecked = checked.slice()
			newChecked[pos] = false
			setCheckCount(newChecked)
		}
	}
	const handleMasterCheckboxClick = (
		event: ChangeEvent<HTMLInputElement>,
	) => {
		if (event.target.checked) {
			setCheckCount([true, true])
		} else {
			setCheckCount([false, false])
		}
	}
	const checkedCount = () =>
		checked.reduce((acc, curr) => (curr ? ++acc : acc), 0)

	return (
		<>
			<Checkbox
				indeterminate={checkedCount() > 0 && checkedCount() < 2}
				checked={checkedCount() === 2}
				value="select-all"
				label={<strong>Select all</strong>}
				onChange={event => handleMasterCheckboxClick(event)}
			/>
			<CheckboxGroup name="emails">
				{selectableCheckboxes.map((checkbox, index) => {
					console.log("Re-rendering")
					return React.cloneElement(checkbox, { key: index })
				})}
			</CheckboxGroup>
		</>
	)
}

selectAll.story = {
	name: "select all",
}

export {
	defaultLight,
	supportingTextLight,
	errorLight,
	indeterminateLight,
	selectAll,
}
