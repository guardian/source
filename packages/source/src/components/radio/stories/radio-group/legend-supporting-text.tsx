import React from 'react';
import { storybookBackgrounds } from '../../../../helpers';
import { RadioGroup, Radio, radioBrand } from '../../index';
import { ThemeProvider } from '@emotion/react';

/* eslint-disable react/jsx-key */
const radios = [
	<Radio value="red" label="Red" />,
	<Radio value="green" label="Green" defaultChecked={true} />,
	<Radio value="blue" label="Blue" />,
];
/* eslint-enable react/jsx-key */

export const legendSupportingTextLight = () => (
	<RadioGroup
		name="colours"
		label="Select your preferred colour"
		supporting="You can always change it later"
	>
		{radios.map((radio, index) =>
			React.cloneElement(radio, { key: index }),
		)}
	</RadioGroup>
);
legendSupportingTextLight.story = {
	name: `legend supporting text light`,
};

export const legendSupportingTextBlue = () => (
	<ThemeProvider theme={radioBrand}>
		<RadioGroup
			name="colours"
			label="Select your preferred colour"
			supporting="You can always change it later"
		>
			{radios.map((radio, index) =>
				React.cloneElement(radio, { key: index }),
			)}
		</RadioGroup>
	</ThemeProvider>
);

legendSupportingTextBlue.story = {
	name: `legend supporting text blue`,
	parameters: {
		backgrounds: {
			default: 'brand',
			values: [storybookBackgrounds.brand],
		},
	},
};
