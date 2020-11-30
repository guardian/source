import React from "react"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { RadioGroup, Radio, radioBrand } from "../../index"
import { ThemeProvider } from "emotion-theming"

/* eslint-disable react/jsx-key */
const radios = [
	<Radio value="red" label="Red" />,
	<Radio value="green" label="Green" />,
	<Radio value="blue" label="Blue" />,
]
/* eslint-enable react/jsx-key */

export const legendErrorLight = () => (
	<RadioGroup
		id="colours"
		name="colours"
		label="Select your preferred colour"
		error="Please select a colour"
	>
		{radios.map((radio, index) =>
			React.cloneElement(radio, { key: index }),
		)}
	</RadioGroup>
)
legendErrorLight.story = {
	name: `legend with error light`,
}

export const legendErrorBlue = () => (
	<ThemeProvider theme={radioBrand}>
		<RadioGroup
			id="colours"
			name="colours"
			label="Select your preferred colour"
			error="Please select a colour"
		>
			{radios.map((radio, index) =>
				React.cloneElement(radio, { key: index }),
			)}
		</RadioGroup>
	</ThemeProvider>
)

legendErrorBlue.story = {
	name: `legend with error blue`,
	parameters: {
		backgrounds: {
			default: "brand",
			values: [storybookBackgrounds.brand],
		},
	},
}
