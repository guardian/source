import React from "react"
import { InlineError } from "./inline-error"

export default {
	title: "InlineError",
}

export const defaultLight = () => (
	<InlineError>Please enter your name</InlineError>
)
defaultLight.story = {
	name: "default light",
}
