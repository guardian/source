import React, { useState } from "react"
import { css } from "@emotion/react"
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

export const multiStateControlled = () => {
	const [state, setState] = useState({ opt1: true, opt2: true, opt3: false })
	const selectedCards = Object.entries(state)
		.filter((entry) => entry[1] === true)
		.map((entry) => entry[0])
		.join(", ")
	const messageText = selectedCards
		? `${selectedCards} selected`
		: "Nothing selected"

	return (
		<div css={medium}>
			<div css={spaced}>
				<ChoiceCardGroup
					name="multi"
					label="This is the question label"
					supporting="Select all that apply"
					multi={true}
				>
					<ChoiceCard
						id="multi-1"
						value="option-1"
						label="Option 1"
						checked={state.opt1 === true}
						onChange={() =>
							setState({
								opt1: !state.opt1,
								opt2: state.opt2,
								opt3: state.opt3,
							})
						}
					/>
					<ChoiceCard
						id="multi-2"
						value="option-2"
						label="Option 2"
						checked={state.opt2 === true}
						onChange={() =>
							setState({
								opt1: state.opt1,
								opt2: !state.opt2,
								opt3: state.opt3,
							})
						}
					/>
					<ChoiceCard
						id="multi-3"
						value="option-3"
						label="Option 3"
						checked={state.opt3 === true}
						onChange={() =>
							setState({
								opt1: state.opt1,
								opt2: state.opt2,
								opt3: !state.opt3,
							})
						}
					/>
				</ChoiceCardGroup>
			</div>
			<span css={message}>{messageText}</span>
		</div>
	)
}

multiStateControlled.story = {
	name: `multi state controlled example`,
}
