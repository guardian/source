import React from 'react';
import { css } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { ChoiceCardGroup, ChoiceCard, choiceCardDefault } from '../index';

const medium = css`
	width: 30em;
`;

/* eslint-disable react/jsx-key */
const singleChoiceCards = [
	<ChoiceCard
		value="single-1"
		label="Preselected"
		id="single-1"
		defaultChecked={true}
	/>,
	<ChoiceCard value="single-2" label="Deselected" id="single-2" />,
	<ChoiceCard value="single-3" label="Deselected" id="single-3" />,
];
/* eslint-enable react/jsx-key */

export const singleStateWithLabelLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={medium}>
			<ChoiceCardGroup name="single" label="This is the question label">
				{singleChoiceCards.map((choiceCard, index) =>
					React.cloneElement(choiceCard, { key: index }),
				)}
			</ChoiceCardGroup>
		</div>
	</ThemeProvider>
);

singleStateWithLabelLight.story = {
	name: `single state with label light`,
};
