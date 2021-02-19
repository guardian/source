import { cloneElement } from 'react';
import { css, ThemeProvider } from '@emotion/react';
import { ChoiceCardGroup, ChoiceCard, choiceCardDefault } from '../index';

/* eslint-disable react/jsx-key */
const multiChoiceCards = [
	<ChoiceCard
		value="option-1"
		label="Option 1"
		defaultChecked={true}
		id="multi-1"
	/>,
	<ChoiceCard
		value="option-2"
		label="Option 2"
		id="multi-2"
		defaultChecked={true}
	/>,
	<ChoiceCard value="option-3" label="Option 3" id="multi-3" />,
];
/* eslint-enable react/jsx-key */

const medium = css`
	width: 30em;
`;
export const multiStateWithSupportingLabelLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={medium}>
			<ChoiceCardGroup
				name="multi"
				label="This is the question label"
				supporting="Select all that apply"
				multi={true}
			>
				{multiChoiceCards.map((choiceCard, index) =>
					cloneElement(choiceCard, { key: index }),
				)}
			</ChoiceCardGroup>
		</div>
	</ThemeProvider>
);

multiStateWithSupportingLabelLight.story = {
	name: `multi state with supporting label light`,
};
