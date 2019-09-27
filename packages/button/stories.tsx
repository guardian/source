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

/* eslint-disable react/jsx-key */
const priorityButtonsLight = [
	<Button>High priority</Button>,
	<Button priority="moderate">Moderate priority</Button>,
	<Button priority="low">Low priority</Button>,
]
const priorityButtonsDark = [
	<Button appearance="dark">High priority</Button>,
	<Button priority="moderate" appearance="dark">
		Moderate priority
	</Button>,
	<Button priority="low" appearance="dark">
		Low priority
	</Button>,
]
const priorityButtonsBlue = [
	<Button appearance="blue">High priority</Button>,
	<Button priority="moderate" appearance="blue">
		Moderate priority
	</Button>,
	<Button priority="low" appearance="blue">
		Low priority
	</Button>,
]
const priorityButtonsYellow = [
	<Button appearance="yellow">High priority</Button>,
	<Button priority="moderate" appearance="yellow">
		Moderate priority
	</Button>,
	<Button priority="low" appearance="yellow">
		Low priority
	</Button>,
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
		<div css={flexStart}>
			{priorityButtonsLight.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</WithBackgroundToggle>
)
priorityLight.story = { name: "priority light" }

export const priorityDark = () => (
	<WithBackgroundToggle
		storyKind="Button"
		storyName="priority"
		selectedValue="dark"
	>
		<div css={flexStart}>
			{priorityButtonsDark.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
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
		<div css={flexStart}>
			{priorityButtonsBlue.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
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
		<div css={flexStart}>
			{priorityButtonsYellow.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
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
