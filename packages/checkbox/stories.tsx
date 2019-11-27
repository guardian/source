import React from "react"

import { CheckboxGroup, Checkbox } from "./index"

export default {
	title: "Checkbox",
}

const defaultLight = () => (
	<CheckboxGroup name="emails">
		<Checkbox label="Guardian Today: UK" value="today_uk" />
		<Checkbox label="Guardian Today: US" value="today_us" />
	</CheckboxGroup>
)

defaultLight.story = {
	name: "default light",
}

export { defaultLight }
