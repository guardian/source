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
	<ChoiceCard value="option-1" label="Option 1" id="unselected-1" />,
	<ChoiceCard value="option-2" label="Option 2" id="unselected-2" />,
	<ChoiceCard value="option-3" label="Option 3" id="unselected-3" />,
]
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
const singleChoiceCards = [
	<ChoiceCard
		value="single-1"
		label="Preselected"
		id="single-1"
		checked={true}
	/>,
	<ChoiceCard value="single-2" label="Deselected" id="single-2" />,
	<ChoiceCard value="single-3" label="Deselected" id="single-3" />,
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
const wildlyVaryingContentChoiceCards = [
	<ChoiceCard
		value="option-1"
		label="A very, very long piece of text"
		id="option-1"
	/>,
	<ChoiceCard value="option-2" label="Something in between" id="option-2" />,
	<ChoiceCard value="option-3" label="Short" id="option-3" />,
]
/* eslint-enable react/jsx-key */

export default {
	title: "ChoiceCard",
}

const medium = css`
	width: 30em;
`

const wide = css`
	width: 40em;
`

const singleStateLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={medium}>
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

const singleStateWithLabelLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={medium}>
			<ChoiceCardGroup name="single" label="This is the question label">
				{singleChoiceCards.map((choiceCard, index) =>
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

const multiStateWithSupportingLabelLight = () => (
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

const singleStateWithIconLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={medium}>
			<ChoiceCardGroup name="colours" label="Payment method">
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
		<ChoiceCardGroup name="colours" label="Payment method">
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

const wildlyVaryingLengthLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={wide}>
			<ChoiceCardGroup name="options">
				{wildlyVaryingContentChoiceCards.map((choiceCard, index) =>
					React.cloneElement(choiceCard, { key: index }),
				)}
			</ChoiceCardGroup>
		</div>
	</ThemeProvider>
)

wildlyVaryingLengthLight.story = {
	name: `single state wildly varying length light`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

export {
	singleStateLight,
	singleStateWithLabelLight,
	multiStateWithSupportingLabelLight,
	singleStateWithIconLight,
	singleStateMobileLight,
	singleStateWithIconMobileLight,
	errorLight,
	wildlyVaryingLengthLight,
}
