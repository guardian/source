import React from "react"
import { Label } from "../index"

export const withErrorMessageLight = () => (
	<Label text="First name" error="Enter your first name below" />
)

withErrorMessageLight.story = {
	name: `with error message light`,
}
