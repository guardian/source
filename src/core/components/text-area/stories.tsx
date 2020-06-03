import React from "react"
import { TextArea } from "./index"

export default {
	title: "TextArea",
}

const defaultLight = () => <TextArea label="Comments" />

defaultLight.story = {
	name: `default light`,
}

const optionalLight = () => <TextArea label="Comments" optional={true} />

optionalLight.story = {
	name: `optional light`,
}

const supportingTextLight = () => (
	<TextArea
		label="Comments"
		supporting="Please keep comments respectful and abide by the community guidelines."
	/>
)

supportingTextLight.story = {
	name: `supporting text light`,
}

const errorWithMessageLight = () => (
	<TextArea label="Comments" error="Please tell us your views" />
)

errorWithMessageLight.story = {
	name: `error with message light`,
}

export {
	defaultLight,
	optionalLight,
	supportingTextLight,
	errorWithMessageLight,
}
