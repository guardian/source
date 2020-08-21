import React from "react"
import { Label } from "../index"

export const optionalLight = () => <Label text="Middle name" optional={true} />

optionalLight.story = {
	name: "optional light",
}
