import React from "react"
import { css } from "@emotion/core"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { SvgCheckmark, SvgClose } from "@guardian/src-svgs"
import { size, space } from "@guardian/src-foundations"
import {
	Button,
	LinkButton,
	buttonDefault,
	buttonBrandAlt,
	buttonBrand,
	buttonReaderRevenue,
	buttonReaderRevenueAlt,
} from "./index"
import { ThemeProvider } from "emotion-theming"

/* eslint-disable react/jsx-key */
const priorityButtons = [
	<Button onClick={e => console.log("Primary clicked:", e.target)}>
		Primary
	</Button>,
	<Button
		onClick={() => console.log("Secondary clicked")}
		priority="secondary"
	>
		Secondary
	</Button>,
	<Button priority="tertiary">Tertiary</Button>,
]
const sizeButtons = [
	<Button>Default</Button>,
	<Button size="small">Small</Button>,
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
const iconButtons = [
	<Button icon={<SvgClose />} aria-label="Dismiss the subscribe banner" />,
	<Button
		icon={<SvgClose />}
		size="small"
		aria-label="Dismiss the subscribe banner"
	/>,
]
const linkButtons = [
	<LinkButton href="#">Primary</LinkButton>,
	<LinkButton href="#" priority="secondary">
		Secondary
	</LinkButton>,
]
const iconLinkButtons = [
	<LinkButton href="#" showIcon={true}>
		Primary
	</LinkButton>,
	<LinkButton href="#" showIcon={true} priority="secondary">
		Secondary
	</LinkButton>,
]
/* eslint-enable react/jsx-key */

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> div {
		margin-right: ${size.medium}px;
	}
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
			Object.assign(
				{},
				{ default: true },
				storybookBackgrounds.brandYellow,
			),
		],
	},
}

export const priorityReaderRevenueBlue = () => (
	<ThemeProvider theme={buttonReaderRevenue}>
		<div css={flexStart}>
			{priorityButtons.slice(0, 2).map((button, index) => (
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
	<ThemeProvider theme={buttonReaderRevenueAlt}>
		<div css={flexStart}>
			{priorityButtons.slice(0, 2).map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityReaderRevenueYellow.story = {
	name: "priority reader revenue yellow",
	parameters: {
		backgrounds: [
			Object.assign(
				{},
				{ default: true },
				storybookBackgrounds.brandYellow,
			),
		],
	},
}

export const sizes = () => (
	<div css={flexStart}>
		{sizeButtons.map((button, index) => (
			<div key={index}>{button}</div>
		))}
	</div>
)
sizes.story = {
	name: "sizes",
}

export const textAndIcon = () => (
	<div css={flexStart}>
		{textIconButtons.map((button, index) => (
			<div key={index}>{button}</div>
		))}
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
