import React from "react"
import { css } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import {
	storybookBackgrounds,
	WithBackgroundToggle,
} from "@guardian/src-helpers"
import { size } from "@guardian/src-foundations"
import { TextInput } from "./text-input"

const stories = storiesOf("TextInput", module)

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
	.add("default light", () => (
		<WithBackgroundToggle
			storyKind="TextInput"
			storyName="default"
			selectedValue="light"
		>
			<TextInput label="label" />
		</WithBackgroundToggle>
	))
	.add(
		"default dark",
		() => (
			<WithBackgroundToggle
				storyKind="TextInput"
				storyName="default"
				selectedValue="dark"
			>
				<TextInput label="label" appearance="dark" />
			</WithBackgroundToggle>
		),
		{
			backgrounds: [
				Object.assign({}, { default: true }, storybookBackgrounds.dark),
			],
		},
	)
