import React, { useState } from "react"
import { css } from "@emotion/core"
import { textSans } from "@guardian/src-foundations/typography"
import { text } from "@guardian/src-foundations/palette"
import { space } from "@guardian/src-foundations"
import { ChoiceCardGroup, ChoiceCard } from "../index"

const medium = css`
	width: 30em;
`

const spaced = css`
	margin-bottom: ${space[3]}px;
`

const message = css`
	${textSans.medium()};
	color: ${text.primary};
`

export const singleStateControlledWithColumns = () => {
	const [selected, setSelected] = useState<string | null>("green")

	return (
		<div css={medium}>
			<div css={spaced}>
				<ChoiceCardGroup name="colours" columns={2}>
					<ChoiceCard
						value="red"
						label="Red"
						id="default-red"
						checked={selected === "red"}
						onChange={() => setSelected("red")}
					/>
					<ChoiceCard
						value="green"
						label="Green"
						id="default-green"
						checked={selected === "green"}
						onChange={() => setSelected("green")}
					/>
					<ChoiceCard
						value="blue"
						label="Blue"
						id="default-blue"
						checked={selected === "blue"}
						onChange={() => setSelected("blue")}
					/>
					<ChoiceCard
						value="orange"
						label="Orange"
						id="default-orange"
						checked={selected === "orange"}
						onChange={() => setSelected("orange")}
					/>
					<ChoiceCard
						value="yellow"
						label="Yellow"
						id="default-yellow"
						checked={selected === "yellow"}
						onChange={() => setSelected("yellow")}
					/>
				</ChoiceCardGroup>
			</div>
			<span css={message}>{selected} is selected</span>
		</div>
	)
}

singleStateControlledWithColumns.story = {
	name: `single state controlled with columns example`
}