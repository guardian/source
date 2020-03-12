import React from "react"
import { css } from "@emotion/core"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { SvgDirectDebit, SvgCreditCard, SvgPayPal } from "@guardian/src-svgs"
import { ChoiceCardGroup, ChoiceCard, choiceCardDefault } from "./index"
import { ThemeProvider } from "emotion-theming"

/* eslint-disable react/jsx-key */
const choiceCards = [
	<ChoiceCard value="red" label="Red" id="default-red" />,
	<ChoiceCard
		value="green"
		label="Green"
		id="default-green"
		checked={true}
	/>,
	<ChoiceCard value="blue" label="Blue" id="default-blue" />,
]
const unselectedChoiceCards = [
	<ChoiceCard value="red" label="Red" id="default-red" />,
	<ChoiceCard value="green" label="Green" id="default-green" />,
	<ChoiceCard value="blue" label="Blue" id="default-blue" />,
]
const iconChoiceCards = [
	<ChoiceCard
		value="direct-debit"
		label="Direct Debit"
		id="direct-debit"
		icon={<SvgDirectDebit />}
	/>,
	<ChoiceCard
		value="credit-card"
		label="Credit Card"
		id="credit-card"
		icon={<SvgCreditCard />}
		checked={true}
	/>,
	<ChoiceCard
		value="paypal"
		label="PayPal"
		id="paypal"
		icon={<SvgPayPal />}
	/>,
]
/* eslint-enable react/jsx-key */

export default {
	title: "ChoiceCard",
}

const narrow = css`
	width: 20em;
`

const medium = css`
	width: 30em;
`

const singleStateLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={narrow}>
			<ChoiceCardGroup name="colours">
				{choiceCards.map((choiceCard, index) =>
					React.cloneElement(choiceCard, { key: index }),
				)}
			</ChoiceCardGroup>
		</div>
	</ThemeProvider>
)

singleStateLight.story = {
	name: `single state light`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

const multiStateLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={narrow}>
			<ChoiceCardGroup name="colours" multi={true}>
				{choiceCards.map((choiceCard, index) =>
					React.cloneElement(choiceCard, { key: index }),
				)}
			</ChoiceCardGroup>
		</div>
	</ThemeProvider>
)

multiStateLight.story = {
	name: `multi state light`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

const singleStateWithLabelLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={narrow}>
			<ChoiceCardGroup
				name="colours"
				label="What is your favourite colour?"
			>
				{choiceCards.map((choiceCard, index) =>
					React.cloneElement(choiceCard, { key: index }),
				)}
			</ChoiceCardGroup>
		</div>
	</ThemeProvider>
)

singleStateWithLabelLight.story = {
	name: `single state with label light`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

const singleStateWithSupportingLabelLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={narrow}>
			<ChoiceCardGroup
				name="colours"
				label="What is your favourite colour?"
				supporting="Think about it"
			>
				{choiceCards.map((choiceCard, index) =>
					React.cloneElement(choiceCard, { key: index }),
				)}
			</ChoiceCardGroup>
		</div>
	</ThemeProvider>
)

singleStateWithSupportingLabelLight.story = {
	name: `single state with supporting label light`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

const singleStateWithIconLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={medium}>
			<ChoiceCardGroup name="colours">
				{iconChoiceCards.map((choiceCard, index) =>
					React.cloneElement(choiceCard, { key: index }),
				)}
			</ChoiceCardGroup>
		</div>
	</ThemeProvider>
)

singleStateWithIconLight.story = {
	name: `single state with icon light`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

const singleStateMobileLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<ChoiceCardGroup name="colours" label="What is your favourite colour?">
			{choiceCards.map((choiceCard, index) =>
				React.cloneElement(choiceCard, { key: index }),
			)}
		</ChoiceCardGroup>
	</ThemeProvider>
)

singleStateMobileLight.story = {
	name: `single state mobile light`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
		viewport: { defaultViewport: "mobileMedium" },
	},
}

const singleStateWithIconMobileLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<ChoiceCardGroup name="colours">
			{iconChoiceCards.map((choiceCard, index) =>
				React.cloneElement(choiceCard, { key: index }),
			)}
		</ChoiceCardGroup>
	</ThemeProvider>
)

singleStateWithIconMobileLight.story = {
	name: `single state with icon mobile light`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
		viewport: { defaultViewport: "mobileMedium" },
	},
}

const errorLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={narrow}>
			<ChoiceCardGroup name="colours" error="Please select a colour">
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

export {
	singleStateLight,
	multiStateLight,
	singleStateWithLabelLight,
	singleStateWithSupportingLabelLight,
	singleStateWithIconLight,
	singleStateMobileLight,
	singleStateWithIconMobileLight,
	errorLight,
}
