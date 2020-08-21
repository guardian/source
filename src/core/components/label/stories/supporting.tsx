import React from "react"
import { Label } from "../index"

export const withSupportingTextLight = () => (
	<Label text="Email" supporting="alex@example.com" />
)

withSupportingTextLight.story = {
	name: `with supporting text light`,
}
