import React from "react"
import { Radio, radioDefault } from "../index"
import { ThemeProvider } from "emotion-theming"

/* eslint-disable react/jsx-key */
const radios = [
	<Radio value="red" label="Red" name="colours" />,
	<Radio value="green" label="Green" name="colours" defaultChecked={true} />,
	<Radio value="blue" label="Blue" name="colours" />,
]
/* eslint-enable react/jsx-key */

const ungrouped = () => (
	<ThemeProvider theme={radioDefault}>
		{radios.map((radio, index) =>
			React.cloneElement(radio, { key: index }),
		)}
	</ThemeProvider>
)

ungrouped.story = {
	name: "ungrouped",
}

export { ungrouped }
