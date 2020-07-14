import React from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { SvgDirectDebit, SvgCreditCard, SvgPayPal } from "@guardian/src-icons"
import { ChoiceCardGroup, ChoiceCard, choiceCardDefault } from "../index"

const medium = css`
	width: 30em;
`

/* eslint-disable react/jsx-key */
const paymentIconChoiceCards = [
	<ChoiceCard
		value="direct-debit"
		label="Direct Debit"
		id="direct-debit"
		icon={<SvgDirectDebit />}
	/>,
	<ChoiceCard
		value="credit-card"
		label="Credit Card"
		id="credit-card"
		icon={<SvgCreditCard />}
		defaultChecked={true}
	/>,
	<ChoiceCard
		value="paypal"
		label="Paypal"
		id="paypal"
		icon={<SvgPayPal />}
	/>,
]
/* eslint-enable react/jsx-key */

export const singleStateWithPaymentIconLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={medium}>
			<ChoiceCardGroup name="colours" label="Payment method">
				{paymentIconChoiceCards.map((choiceCard, index) =>
					React.cloneElement(choiceCard, { key: index }),
				)}
			</ChoiceCardGroup>
		</div>
	</ThemeProvider>
)

singleStateWithPaymentIconLight.story = {
	name: `single state with payment icon light`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}
