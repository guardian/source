import React from "react"
import { Label } from "../index"

export const withSuccessMessageLight = () => (
	<Label text="Input Code" success="This code is valid" />
)

withSuccessMessageLight.story = {
	name: `with success message light`,
}
