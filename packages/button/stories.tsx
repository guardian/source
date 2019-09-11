import React from "react"
import { css } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { space } from "@guardian/src-foundations"
import { Button } from "./button"
import { SvgArrowRightStraight } from "@guardian/src-svgs"

const stories = storiesOf("Button", module)
/* eslint-disable react/jsx-key */
const priorityButtons = [
	<Button priority="high">High</Button>,
	<Button priority="default">Default</Button>,
	<Button priority="low">Low</Button>,
	<Button priority="subtle">Subtle</Button>
]
const sizeButtons = [
	<Button size="default">Default</Button>,
	<Button size="small">Small</Button>
]
const textIconButtons = [
	<Button iconSide="left" icon={<SvgArrowRightStraight />}>
		Button Label
	</Button>,
	<Button iconSide="right" icon={<SvgArrowRightStraight />}>
		Button Label
	</Button>
]
const iconButtons = [<Button icon={<SvgArrowRightStraight />} />]
/* eslint-enable react/jsx-key */

const spaceEvenly = css`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`
stories
	.add("priority", () => (
		<div css={spaceEvenly}>
			{priorityButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	))
	.add(
		"blue",
		() => (
			<div css={spaceEvenly}>
				{priorityButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		),
		{
			backgrounds: [
				Object.assign({}, { default: true }, storybookBackgrounds.blue)
			]
		}
	)
	.add("sizes", () => (
		<div css={spaceEvenly}>
			{sizeButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	))
	.add("text and icon", () => (
		<div css={spaceEvenly}>
			{textIconButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	))
	.add("icon only", () => (
		<div css={spaceEvenly}>
			{iconButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	))
