import React from "react"
import { Label } from "../index"

export const optionalWithErrorMessageLight = () => (
	<Label
		text="Telephone number"
		error="The number must have at least 11 digits"
		optional={true}
	/>
)

optionalWithErrorMessageLight.story = {
	name: `optional with error message light`,
}
