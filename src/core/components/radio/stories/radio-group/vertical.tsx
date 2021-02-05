import React from 'react';
import { storybookBackgrounds } from '@guardian/src-helpers';
import { RadioGroup, Radio, radioBrand } from '../../index';
import { ThemeProvider } from '@emotion/react';

/* eslint-disable react/jsx-key */
const radios = [
	<Radio value="red" label="Red" />,
	<Radio value="green" label="Green" defaultChecked={true} />,
	<Radio value="blue" label="Blue" />,
];
/* eslint-enable react/jsx-key */

export const verticalLight = () => (
	<RadioGroup name="colours">
		{radios.map((radio, index) =>
			React.cloneElement(radio, { key: index }),
		)}
	</RadioGroup>
);
verticalLight.story = {
	name: `vertical light`,
};

export const verticalBlue = () => (
	<ThemeProvider theme={radioBrand}>
		<RadioGroup name="colours">
			{radios.map((radio, index) =>
				React.cloneElement(radio, { key: index }),
			)}
		</RadioGroup>
	</ThemeProvider>
);

verticalBlue.story = {
	name: `vertical blue`,
	parameters: {
		backgrounds: {
			default: 'brand',
			values: [storybookBackgrounds.brand],
		},
	},
};
