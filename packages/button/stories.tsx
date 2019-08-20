import React from "react";
import { css } from "@emotion/core";
import { storiesOf } from "@storybook/react";
import { storybookBackgrounds } from "@guardian/src-helpers";
import { space } from "@guardian/src-foundations";
import { Button } from "./button";

const stories = storiesOf("Button", module);
const buttons = [
	<Button>Button Label</Button>,
	<Button iconSide="left">Button Label</Button>
];

stories
	.add("default", () => (
		<>
			{buttons.map((button, index) => (
				<div
					key={index}
					css={css`
						margin-bottom: ${space[2]}px;
					`}
				>
					{button}
				</div>
			))}
		</>
	))
	.add(
		"dark",
		() => (
			<>
				{buttons.map((button, index) => (
					<div
						key={index}
						css={css`
							margin-bottom: ${space[2]}px;
						`}
					>
						{button}
					</div>
				))}
			</>
		),
		{
			backgrounds: [
				Object.assign({}, { default: true }, storybookBackgrounds.dark)
			]
		}
	);
