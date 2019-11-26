import React from "react"

import { CheckboxGroup, Checkbox } from "./index"

export default {
	title: "Checkbox",
}

const defaultCheckbox = () => (
	<CheckboxGroup name="emails">
		<Checkbox label="Guardian Today: UK" value="today_uk" />
		<Checkbox label="Guardian Today: US" value="today_us" />
	</CheckboxGroup>
)

export { defaultCheckbox }
