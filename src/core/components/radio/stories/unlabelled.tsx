import React from "react"
import { Radio, radioDefault } from "../index"
import { ThemeProvider } from "emotion-theming"

const unlabelled = () => (
	<ThemeProvider theme={radioDefault}>
		<Radio value="red" checked={true} aria-label="Red" />
	</ThemeProvider>
)

unlabelled.story = {
	name: "unlabelled",
}

export { unlabelled }
