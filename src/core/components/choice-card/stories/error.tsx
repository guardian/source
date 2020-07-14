import React from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { ChoiceCardGroup, ChoiceCard, choiceCardDefault } from "../index"

const medium = css`
	width: 30em;
`

/* eslint-disable react/jsx-key */
const unselectedChoiceCards = [
	<ChoiceCard value="option-1" label="Option 1" id="unselected-1" />,
	<ChoiceCard value="option-2" label="Option 2" id="unselected-2" />,
	<ChoiceCard value="option-3" label="Option 3" id="unselected-3" />,
]
/* eslint-enable react/jsx-key */

export const errorLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={medium}>
			<ChoiceCardGroup
				name="colours"
				error="Please select a choice card to continue"
			>
				{unselectedChoiceCards.map((radio, index) =>
					React.cloneElement(radio, { key: index }),
				)}
			</ChoiceCardGroup>
		</div>
	</ThemeProvider>
)

errorLight.story = {
	name: `error light`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}
