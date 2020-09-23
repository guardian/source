import React from "react"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { RadioGroup, Radio, radioBrand } from "../../index"
import { ThemeProvider } from "emotion-theming"

/* eslint-disable react/jsx-key */
const radios = [
	<Radio value="red" label="Red" />,
	<Radio value="green" label="Green" defaultChecked={true} />,
	<Radio value="blue" label="Blue" />,
]
/* eslint-enable react/jsx-key */

export const legendLight = () => (
	<RadioGroup name="colours" label="Select your preferred colour">
		{radios.map((radio, index) =>
			React.cloneElement(radio, { key: index }),
		)}
	</RadioGroup>
)
legendLight.story = {
	name: `legend light`,
}

export const legendBlue = () => (
	<ThemeProvider theme={radioBrand}>
		<RadioGroup name="colours" label="Select your preferred colour">
			{radios.map((radio, index) =>
				React.cloneElement(radio, { key: index }),
			)}
		</RadioGroup>
	</ThemeProvider>
)

legendBlue.story = {
	name: `legend blue`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

export const legendHorizontal = () => (
	<RadioGroup
		orientation="horizontal"
		name="yes-or-no"
		label="Do you live in the United Kingdom?"
	>
		<Radio value="yes" label="Yes" />
		<Radio value="no" label="No" defaultChecked={true} />
	</RadioGroup>
)

legendHorizontal.story = {
	name: `legend horizontal light`,
}
