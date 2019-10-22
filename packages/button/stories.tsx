import React from "react"
import { css } from "@emotion/core"
import {
	storybookBackgrounds,
	WithBackgroundToggle,
} from "@guardian/src-helpers"
import {
	SvgCheckmark,
	SvgArrowRightStraight,
	SvgClose,
} from "@guardian/src-svgs"
import { size } from "@guardian/src-foundations"
import { Button } from "./button"
import {
	lightTheme,
	darkTheme,
	yellowTheme,
	blueTheme,
	rrTheme,
} from "./themes"
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
	<Button iconSide="left" icon={<SvgCheckmark />}>
		Left aligned
	</Button>,
	<Button iconSide="right" icon={<SvgArrowRightStraight />}>
		Right aligned
	</Button>,
]
const iconButtons = [
	<Button icon={<SvgClose />} aria-label="Dismiss the subscribe banner" />,
	<Button
		icon={<SvgClose />}
		size="small"
		aria-label="Dismiss the subscribe banner"
	/>,
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
		<ThemeProvider theme={lightTheme}>
			<div css={flexStart}>
				{priorityButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		</ThemeProvider>
	</WithBackgroundToggle>
)
priorityLight.story = { name: "priority light" }

export const priorityDark = () => (
	<WithBackgroundToggle
		storyKind="Button"
		storyName="priority"
		selectedValue="dark"
	>
		<ThemeProvider theme={darkTheme}>
			<div css={flexStart}>
				{priorityButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		</ThemeProvider>
	</WithBackgroundToggle>
)
priorityDark.story = {
	name: "priority dark",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.dark),
		],
	},
}

export const priorityBlue = () => (
	<WithBackgroundToggle
		storyKind="Button"
		storyName="priority"
		selectedValue="blue"
	>
		<ThemeProvider theme={blueTheme}>
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
		<ThemeProvider theme={yellowTheme}>
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

export const priorityReaderRevenue = () => (
	<WithBackgroundToggle
		storyKind="Button"
		storyName="priority"
		selectedValue="reader revenue"
	>
		<ThemeProvider theme={rrTheme}>
			<div css={flexStart}>
				{priorityButtons.slice(0, 2).map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		</ThemeProvider>
	</WithBackgroundToggle>
)
priorityReaderRevenue.story = {
	name: "priority reader revenue",
	parameters: {
		backgrounds: [
			Object.assign(
				{},
				{ default: true },
				storybookBackgrounds["reader revenue"],
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
