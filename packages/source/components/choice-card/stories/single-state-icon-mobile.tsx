import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { SvgCamera, SvgAudio, SvgVideo } from '@guardian/src-icons';
import { ChoiceCardGroup, ChoiceCard, choiceCardDefault } from '../index';

/* eslint-disable react/jsx-key */
const iconChoiceCards = [
	<ChoiceCard
		value="picture"
		label="Picture"
		id="picture"
		icon={<SvgCamera />}
	/>,
	<ChoiceCard
		value="audio"
		label="Audio"
		id="audio"
		icon={<SvgAudio />}
		defaultChecked={true}
	/>,
	<ChoiceCard value="video" label="Video" id="video" icon={<SvgVideo />} />,
];
/* eslint-enable react/jsx-key */

export const singleStateWithIconMobileLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<ChoiceCardGroup name="colours" label="Media format">
			{iconChoiceCards.map((choiceCard, index) =>
				React.cloneElement(choiceCard, { key: index }),
			)}
		</ChoiceCardGroup>
	</ThemeProvider>
);

singleStateWithIconMobileLight.story = {
	name: `single state with icon mobile light`,
	parameters: {
		viewport: { defaultViewport: 'mobileMedium' },
	},
};
