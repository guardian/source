import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { SvgDirectDebit, SvgCreditCard, SvgPayPal } from '@guardian/src-icons';
import { ChoiceCardGroup, ChoiceCard, choiceCardDefault } from '../index';

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
];
/* eslint-enable react/jsx-key */

export const singleStateWithPaymentIconMobileLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<ChoiceCardGroup name="colours" label="Payment method">
			{paymentIconChoiceCards.map((choiceCard, index) =>
				React.cloneElement(choiceCard, { key: index }),
			)}
		</ChoiceCardGroup>
	</ThemeProvider>
);

singleStateWithPaymentIconMobileLight.story = {
	name: `single state with payment icon mobile light`,
	parameters: {
		viewport: { defaultViewport: 'mobileMedium' },
	},
};
