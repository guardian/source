import React from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { ChoiceCardGroup, ChoiceCard, choiceCardDefault } from "../index"

/* eslint-disable react/jsx-key */
const multiChoiceCards = [
	<ChoiceCard
		value="option-1"
		label="Option 1"
		checked={true}
		id="multi-1"
	/>,
	<ChoiceCard
		value="option-2"
		label="Option 2"
		id="multi-2"
		checked={true}
	/>,
	<ChoiceCard value="option-3" label="Option 3" id="multi-3" />,
]
/* eslint-enable react/jsx-key */

const medium = css`
	width: 30em;
`
export const multiStateWithSupportingLabelLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={medium}>
			<ChoiceCardGroup
				name="multi"
				label="This is the question label"
				supporting="Select all that apply"
				multi={true}
			>
				{multiChoiceCards.map((choiceCard, index) =>
					React.cloneElement(choiceCard, { key: index }),
				)}
			</ChoiceCardGroup>
		</div>
	</ThemeProvider>
)

multiStateWithSupportingLabelLight.story = {
	name: `multi state with supporting label light`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}
