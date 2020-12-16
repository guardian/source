import React from "react"
import { css } from "@emotion/react"
import { space } from "@guardian/src-foundations"
import { ChoiceCardGroup, ChoiceCard } from "../index"

const medium = css`
	width: 30em;
`

const spaced = css`
	margin-bottom: ${space[3]}px;
`

export const singleStateControlledWithColumns = () => {
	return (
		<div css={medium}>
			<div css={spaced}>
				<ChoiceCardGroup name="colours" columns={3}>
					<ChoiceCard value="red" label="Red" id="default-red" />
					<ChoiceCard
						value="green"
						label="Green"
						id="default-green"
						defaultChecked={true}
					/>
					<ChoiceCard value="blue" label="Blue" id="default-blue" />
					<ChoiceCard
						value="orange"
						label="Orange"
						id="default-orange"
					/>
					<ChoiceCard
						value="yellow"
						label="Yellow"
						id="default-yellow"
					/>
				</ChoiceCardGroup>
			</div>
		</div>
	)
}

singleStateControlledWithColumns.story = {
	name: `single state with columns`,
}
