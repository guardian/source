import React from "react"

import { Checkbox } from "../index"

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

export { indeterminateLight }
