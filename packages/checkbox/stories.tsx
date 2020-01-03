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
	const checkboxData = [
		{
			label: "Guardian Today: UK",
			value: "today_uk",
		},
		{
			label: "Guardian Today: US",
			value: "today_us",
		},
	]
	const [checked, setCheckCount] = useState(checkboxData.map(() => false))
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
			setCheckCount(checkboxData.map(() => true))
		} else {
			setCheckCount(checkboxData.map(() => false))
		}
	}
	/* eslint-disable react/jsx-key */
	const selectableCheckboxes = checkboxData.map(({ label, value }, index) => (
		<Checkbox
			label={label}
			value={value}
			onChange={event => handleCheckboxClick(event, index)}
			checked={checked[index] === true}
		/>
	))
	/* eslint-enable react/jsx-key */
	const checkedCount = () =>
		checked.reduce((acc, curr) => (curr ? ++acc : acc), 0)

	return (
		<>
			<Checkbox
				indeterminate={
					checkedCount() > 0 &&
					checkedCount() < selectableCheckboxes.length
				}
				checked={checkedCount() === selectableCheckboxes.length}
				value="select-all"
				label={<strong>Select all</strong>}
				onChange={event => handleMasterCheckboxClick(event)}
			/>
			<CheckboxGroup name="emails">
				{selectableCheckboxes.map((checkbox, index) => {
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
