import React from "react"

import { CheckboxGroup, Checkbox } from "../index"

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

export { errorLight }
