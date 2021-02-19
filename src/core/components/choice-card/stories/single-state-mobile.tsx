import { cloneElement } from 'react';
import { ThemeProvider } from '@emotion/react';
import { ChoiceCardGroup, ChoiceCard, choiceCardDefault } from '../index';

/* eslint-disable react/jsx-key */
const choiceCards = [
	<ChoiceCard value="red" label="Red" id="default-red" />,
	<ChoiceCard
		value="green"
		label="Green"
		id="default-green"
		defaultChecked={true}
	/>,
	<ChoiceCard value="blue" label="Blue" id="default-blue" />,
];
/* eslint-enable react/jsx-key */

export const singleStateMobileLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<ChoiceCardGroup name="colours" label="What is your favourite colour?">
			{choiceCards.map((choiceCard, index) =>
				cloneElement(choiceCard, { key: index }),
			)}
		</ChoiceCardGroup>
	</ThemeProvider>
);

singleStateMobileLight.story = {
	name: `single state mobile light`,
	parameters: {
		viewport: { defaultViewport: 'mobileMedium' },
	},
};
