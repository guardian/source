import React from "react"
import { css } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import {
	storybookBackgrounds,
	WithBackgroundToggle,
} from "@guardian/src-helpers"
import { SvgCheckmark } from "@guardian/src-svgs"
import { size } from "@guardian/src-foundations"
import { Button } from "./button"

const stories = storiesOf("Button", module)
/* eslint-disable react/jsx-key */
const priorityButtons = [
	<Button>Default</Button>,
	<Button priority="moderate">Moderate</Button>,
	<Button priority="low">Low</Button>,
]
const sizeButtons = [
	<Button>Default</Button>,
	<Button size="small">Small</Button>,
]
const textIconButtons = [
	<Button iconSide="left" icon={<SvgCheckmark />}>
		Button Label
	</Button>,
	<Button iconSide="right" icon={<SvgCheckmark />}>
		Button Label
	</Button>,
]
const iconButtons = [
	<Button
		icon={<SvgCheckmark />}
		aria-label="I accept the terms and conditions"
	/>,
	<Button
		icon={<SvgCheckmark />}
		size="small"
		aria-label="I accept the terms and conditions"
	/>,
]
/* eslint-enable react/jsx-key */

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	margin-bottom: ${size.medium}px;

	> div {
		margin-right: ${size.medium}px;
	}
`

stories
	.add("priority light", () => (
		<WithBackgroundToggle
			storyKind="Button"
			storyName="priority"
			selectedValue="light"
		>
			<div css={flexStart}>
				{priorityButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		</WithBackgroundToggle>
	))
	.add(
		"priority dark",
		() => (
			<WithBackgroundToggle
				storyKind="Button"
				storyName="priority"
				selectedValue="dark"
			>
				<div css={flexStart}>
					{priorityButtons.map((button, index) => (
						<div key={index}>{button}</div>
					))}
				</div>
			</WithBackgroundToggle>
		),
		{
			backgrounds: [
				Object.assign({}, { default: true }, storybookBackgrounds.dark),
			],
		},
	)
	.add("sizes", () => (
		<div css={flexStart}>
			{sizeButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	))
	.add("text and icon", () => (
		<div css={flexStart}>
			{textIconButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	))
	.add("icon only", () => (
		<div css={flexStart}>
			{iconButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	))
