import React from "react"
import { css } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import { storybookBackgrounds, BackgroundToggle } from "@guardian/src-helpers"
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
const disabledButtons = [<Button disabled>Default</Button>]
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

const spaceBetween = css`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

stories
	.add("priority light", () => (
		<div css={spaceBetween}>
			<div css={flexStart}>
				{priorityButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
			<BackgroundToggle
				storyKind="Button"
				storyName="priority"
				selectedValue="light"
			/>
		</div>
	))
	.add(
		"priority on dark blue",
		() => (
			<div css={flexStart}>
				{priorityButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		),
		{
			backgrounds: [
				Object.assign({}, { default: true }, storybookBackgrounds.blue),
			],
		},
	)
	.add(
		"priority dark",
		() => (
			<div css={spaceBetween}>
				<div css={flexStart}>
					{priorityButtons.map((button, index) => (
						<div key={index}>{button}</div>
					))}
				</div>
				<BackgroundToggle
					storyKind="Button"
					selectedValue="dark"
					storyName="priority"
				/>
			</div>
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
	.add("disabled", () => (
		<div css={flexStart}>
			{disabledButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	))
	.add(
		"disabled on dark blue",
		() => (
			<div css={flexStart}>
				{disabledButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		),
		{
			backgrounds: [
				Object.assign({}, { default: true }, storybookBackgrounds.blue),
			],
		},
	)
