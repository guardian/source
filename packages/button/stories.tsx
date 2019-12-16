import React from "react"
import { css } from "@emotion/core"
import {
	storybookBackgrounds,
	WithBackgroundToggle,
} from "@guardian/src-helpers"
import { SvgCheckmark, SvgClose } from "@guardian/src-svgs"
import { size, space } from "@guardian/src-foundations"
import {
	Button,
	LinkButton,
	buttonLight,
	buttonBrandYellow,
	buttonBrand,
	buttonReaderRevenue,
	buttonReaderRevenueYellow,
} from "./index"
import { ThemeProvider } from "emotion-theming"

/* eslint-disable react/jsx-key */
const priorityButtons = [
	<Button>Primary</Button>,
	<Button priority="secondary">Secondary</Button>,
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
	<WithBackgroundToggle
		storyKind="Button"
		storyName="priority"
		selectedValue="light"
	>
		<ThemeProvider theme={buttonLight}>
			<div css={flexStart}>
				{priorityButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		</ThemeProvider>
	</WithBackgroundToggle>
)
priorityLight.story = { name: "priority light" }

export const priorityBlue = () => (
	<WithBackgroundToggle
		storyKind="Button"
		storyName="priority"
		selectedValue="blue"
	>
		<ThemeProvider theme={buttonBrand}>
			<div css={flexStart}>
				{priorityButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		</ThemeProvider>
	</WithBackgroundToggle>
)
priorityBlue.story = {
	name: "priority blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.blue),
		],
	},
}

export const priorityYellow = () => (
	<WithBackgroundToggle
		storyKind="Button"
		storyName="priority"
		selectedValue="yellow"
	>
		<ThemeProvider theme={buttonBrandYellow}>
			<div css={flexStart}>
				{priorityButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		</ThemeProvider>
	</WithBackgroundToggle>
)
priorityYellow.story = {
	name: "priority yellow",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.yellow),
		],
	},
}

export const priorityReaderRevenueBlue = () => (
	<WithBackgroundToggle
		storyKind="Button"
		storyName="priority"
		selectedValue="reader revenue blue"
	>
		<ThemeProvider theme={buttonReaderRevenue}>
			<div css={flexStart}>
				{priorityButtons.slice(0, 2).map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		</ThemeProvider>
	</WithBackgroundToggle>
)
priorityReaderRevenueBlue.story = {
	name: "priority reader revenue blue",
	parameters: {
		backgrounds: [
			Object.assign(
				{},
				{ default: true },
				storybookBackgrounds["reader revenue blue"],
			),
		],
	},
}

export const priorityReaderRevenueYellow = () => (
	<WithBackgroundToggle
		storyKind="Button"
		storyName="priority"
		selectedValue="reader revenue yellow"
	>
		<ThemeProvider theme={buttonReaderRevenueYellow}>
			<div css={flexStart}>
				{priorityButtons.slice(0, 2).map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		</ThemeProvider>
	</WithBackgroundToggle>
)
priorityReaderRevenueYellow.story = {
	name: "priority reader revenue yellow",
	parameters: {
		backgrounds: [
			Object.assign(
				{},
				{ default: true },
				storybookBackgrounds["reader revenue yellow"],
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
