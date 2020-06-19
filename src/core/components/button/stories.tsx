import React from "react"
import { css } from "@emotion/core"
import { storybookBackgrounds } from "@guardian/src-helpers"
import {
	SvgCheckmark,
	SvgClose,
	SvgArrowRightStraight,
} from "@guardian/src-icons"
import { space } from "@guardian/src-foundations"
import { background } from "@guardian/src-foundations/palette"
import {
	Button,
	LinkButton,
	buttonDefault,
	buttonBrandAlt,
	buttonBrand,
	buttonReaderRevenue,
	buttonReaderRevenueBrand,
	buttonReaderRevenueBrandAlt,
} from "./index"
import { ThemeProvider } from "emotion-theming"

/* eslint-disable react/jsx-key */
const priorityButtons = [
	<Button onClick={e => console.log("Primary clicked:", e.target)}>
		Primary
	</Button>,
	<Button
		onClick={e => console.log("Secondary clicked:", e.target)}
		priority="secondary"
	>
		Secondary
	</Button>,
	<Button
		onClick={e => console.log("Tertiary clicked", e.target)}
		priority="tertiary"
	>
		Tertiary
	</Button>,
	<Button
		priority="subdued"
		onClick={e => console.log("Subdued clicked", e.target)}
	>
		Subdued
	</Button>,
]
const defaultSizeButtons = [
	<Button>Default primary</Button>,
	<Button priority="subdued">Default subdued</Button>,
]
const smallSizeButtons = [
	<Button size="small">Small primary</Button>,
	<Button priority="subdued" size="small">
		Small subdued
	</Button>,
]
const xsmallSizeButtons = [
	<Button size="xsmall">Extra small primary</Button>,
	<Button priority="subdued" size="xsmall">
		Extra small subdued
	</Button>,
]
const textIconButtons = [
	<Button icon={<SvgCheckmark />}>Button: icon to the left</Button>,
	<Button iconSide="right" icon={<SvgCheckmark />}>
		Button: icon to the right
	</Button>,
	<LinkButton href="#" icon={<SvgArrowRightStraight />}>
		Link button: icon to the left
	</LinkButton>,
	<LinkButton href="#" iconSide="right" icon={<SvgArrowRightStraight />}>
		Link button: icon to the right
	</LinkButton>,
]

const textIconButtonsSmall = [
	<Button icon={<SvgCheckmark />} size="small">
		Small button: to the left
	</Button>,
	<Button iconSide="right" icon={<SvgCheckmark />} size="small">
		Small button: to the right
	</Button>,
	<LinkButton href="#" icon={<SvgArrowRightStraight />} size="small">
		Small link button: to the left
	</LinkButton>,
	<LinkButton
		href="#"
		icon={<SvgArrowRightStraight />}
		iconSide="right"
		size="small"
	>
		Small link button: to the right
	</LinkButton>,
]

const textIconButtonsXsmall = [
	<Button icon={<SvgCheckmark />} size="xsmall">
		Extra small button: to the left
	</Button>,
	<Button iconSide="right" icon={<SvgCheckmark />} size="xsmall">
		Extra small button: to the right
	</Button>,
	<LinkButton href="#" icon={<SvgArrowRightStraight />} size="xsmall">
		Extra small link button: to the left
	</LinkButton>,
	<LinkButton
		href="#"
		iconSide="right"
		icon={<SvgArrowRightStraight />}
		size="xsmall"
	>
		Extra small link button: to the right
	</LinkButton>,
]
const iconButtons = [
	<Button icon={<SvgClose />} hideLabel={true}>
		Dismiss the subscribe banner
	</Button>,
	<Button size="small" icon={<SvgClose />} hideLabel={true}>
		Dismiss the subscribe banner
	</Button>,
	<Button size="xsmall" icon={<SvgClose />} hideLabel={true}>
		Dismiss the subscribe banner
	</Button>,
]

const iconLinkButtons = [
	<LinkButton href="#" icon={<SvgClose />} hideLabel={true}>
		Dismiss the subscribe banner
	</LinkButton>,
	<LinkButton href="#" size="small" icon={<SvgClose />} hideLabel={true}>
		Dismiss the subscribe banner
	</LinkButton>,
	<LinkButton href="#" size="xsmall" icon={<SvgClose />} hideLabel={true}>
		Dismiss the subscribe banner
	</LinkButton>,
]
const priorityLinkButtons = [
	<LinkButton href="#">Primary</LinkButton>,
	<LinkButton href="#" priority="secondary">
		Secondary
	</LinkButton>,
	<LinkButton href="#" priority="tertiary">
		Tertiary
	</LinkButton>,
	<LinkButton href="#" priority="subdued">
		Subdued
	</LinkButton>,
]
const priorityIconLinkButtons = [
	<LinkButton href="#" iconSide="right" icon={<SvgArrowRightStraight />}>
		Primary
	</LinkButton>,
	<LinkButton
		href="#"
		iconSide="right"
		icon={<SvgArrowRightStraight />}
		priority="secondary"
	>
		Secondary
	</LinkButton>,
	<LinkButton
		href="#"
		iconSide="right"
		icon={<SvgArrowRightStraight />}
		priority="tertiary"
	>
		Tertiary
	</LinkButton>,
	<LinkButton
		href="#"
		iconSide="right"
		icon={<SvgArrowRightStraight />}
		priority="subdued"
	>
		Subdued
	</LinkButton>,
]
/* eslint-enable react/jsx-key */

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> div {
		margin-right: ${space[9]}px;
	}
`

const bottomSpacer = css`
	margin-bottom: ${space[9]}px;
`

export default {
	title: "Button",
	component: Button,
}

export const priorityLight = () => (
	<ThemeProvider theme={buttonDefault}>
		<div css={flexStart}>
			{priorityButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityLight.story = { name: "priority light" }

export const priorityBlue = () => (
	<ThemeProvider theme={buttonBrand}>
		<div css={flexStart}>
			{priorityButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityBlue.story = {
	name: "priority blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

export const priorityGrey = () => (
	<ThemeProvider theme={buttonDefault}>
		<div css={flexStart}>
			{priorityButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityGrey.story = {
	name: "priority grey",
	parameters: {
		backgrounds: [
			{ name: "grey", value: background.secondary, default: true },
		],
	},
}

export const priorityYellow = () => (
	<ThemeProvider theme={buttonBrandAlt}>
		<div css={flexStart}>
			{priorityButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityYellow.story = {
	name: "priority yellow",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brandAlt),
		],
	},
}

const readerRevenueButtons = [priorityButtons[0], priorityButtons[2]]

export const priorityReaderRevenueLight = () => (
	<ThemeProvider theme={buttonReaderRevenue}>
		<div css={flexStart}>
			{readerRevenueButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityReaderRevenueLight.story = {
	name: "priority reader revenue light",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

export const priorityReaderRevenueBlue = () => (
	<ThemeProvider theme={buttonReaderRevenueBrand}>
		<div css={flexStart}>
			{readerRevenueButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityReaderRevenueBlue.story = {
	name: "priority reader revenue blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

export const priorityReaderRevenueYellow = () => (
	<ThemeProvider theme={buttonReaderRevenueBrandAlt}>
		<div css={flexStart}>
			{readerRevenueButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityReaderRevenueYellow.story = {
	name: "priority reader revenue yellow",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brandAlt),
		],
	},
}

export const sizes = () => (
	<div>
		<div css={[flexStart, bottomSpacer]}>
			{defaultSizeButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
		<div css={[flexStart, bottomSpacer]}>
			{smallSizeButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
		<div css={[flexStart, bottomSpacer]}>
			{xsmallSizeButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</div>
)
sizes.story = {
	name: "sizes",
}

export const textAndIcon = () => (
	<div>
		<div css={[flexStart, bottomSpacer]}>
			{textIconButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
		<div css={[flexStart, bottomSpacer]}>
			{textIconButtonsSmall.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
		<div css={[flexStart, bottomSpacer]}>
			{textIconButtonsXsmall.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</div>
)
textAndIcon.story = {
	name: "text and icon",
}

export const iconOnlyButtons = () => (
	<div css={flexStart}>
		{iconButtons.map((button, index) => (
			<div key={index}>{button}</div>
		))}
	</div>
)
iconOnlyButtons.story = {
	name: "icon only buttons",
}

export const iconOnlyLinkButtons = () => (
	<div css={flexStart}>
		{iconLinkButtons.map((button, index) => (
			<div key={index}>{button}</div>
		))}
	</div>
)
iconOnlyLinkButtons.story = {
	name: "icon only link buttons",
}

const spacer = css`
	margin-bottom: ${space[3]}px;
`

export const priorityLinkButtonsLight = () => (
	<>
		<div css={spacer}>
			<div css={flexStart}>
				{priorityLinkButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		</div>
		<div css={spacer}>
			<div css={flexStart}>
				{priorityIconLinkButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		</div>
	</>
)
priorityLinkButtonsLight.story = { name: "priority link buttons" }
