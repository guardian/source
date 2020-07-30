import React, { useState } from "react"
import { css } from "@emotion/core"
import { from } from "@guardian/src-foundations/mq"
import { textSans } from "@guardian/src-foundations/typography"
import { Select, Option } from "../index"

const constrainedWith = css`
	width: 100%;
	${from.phablet} {
		width: 25em;
	}
`

const message = css`
	${textSans.medium()}
`

export const controlled = () => {
	const [state, setState] = useState("al")

	return (
		<div css={constrainedWith}>
			<Select
				label="State"
				value={state}
				onChange={(event) => setState(event.target.value)}
			>
				<Option value="">Select a state</Option>
				<Option value="al">Alabama</Option>
				<Option value="ca">California</Option>
			</Select>
			<span css={message}>
				{state ? `You have selected: ${state}` : ""}
			</span>
		</div>
	)
}

controlled.story = {
	name: "controlled example",
}
