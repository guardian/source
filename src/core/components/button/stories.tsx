import React from "react"
import { css } from "@emotion/core"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { SvgCheckmark, SvgClose } from "@guardian/src-svgs"
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
	<Button icon={<SvgCheckmark />}>Icon to the left</Button>,
	<Button iconSide="right" icon={<SvgCheckmark />}>
		Icon to the right
	</Button>,
	<LinkButton href="#" showIcon={true}>
		Link button with an arrow icon
	</LinkButton>,
]

const textIconButtonsSmall = [
	<Button icon={<SvgCheckmark />} size="small">
		Small: to the left
	</Button>,
	<Button iconSide="right" icon={<SvgCheckmark />} size="small">
		Small: to the right
	</Button>,
	<LinkButton href="#" showIcon={true} size="small">
		Small: Link button
	</LinkButton>,
]

const textIconButtonsXsmall = [
	<Button icon={<SvgCheckmark />} size="xsmall">
		Extra small: to the left
	</Button>,
	<Button iconSide="right" icon={<SvgCheckmark />} size="xsmall">
		Extra small: to the right
	</Button>,
	<LinkButton href="#" showIcon={true} size="xsmall">
		Extra small: Link button
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
const linkButtons = [
	<LinkButton href="#">Primary</LinkButton>,
	<LinkButton href="#" priority="secondary">
		Secondary
	</LinkButton>,
	<LinkButton href="#" priority="tertiary">
		Tertiary
	</LinkButton>,
]
const iconLinkButtons = [
	<LinkButton href="#" showIcon={true}>
		Primary
	</LinkButton>,
	<LinkButton href="#" showIcon={true} priority="secondary">
		Secondary
	</LinkButton>,
	<LinkButton href="#" showIcon={true} priority="tertiary">
		Tertiary
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

export const iconOnly = () => (
	<div css={flexStart}>
		{iconButtons.map((button, index) => (
			<div key={index}>{button}</div>
		))}
	</div>
)
iconOnly.story = {
	name: "icon only",
}

const spacer = css`
	margin-bottom: ${space[3]}px;
`

export const priorityLinkButtons = () => (
	<>
		<div css={spacer}>
			<div css={flexStart}>
				{linkButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		</div>
		<div css={spacer}>
			<div css={flexStart}>
				{iconLinkButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		</div>
	</>
)
priorityLinkButtons.story = { name: "priority link buttons" }
