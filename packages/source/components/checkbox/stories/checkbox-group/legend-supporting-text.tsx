import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { storybookBackgrounds } from '@guardian/src-helpers';

import {
	CheckboxGroup,
	Checkbox,
	checkboxDefault,
	checkboxBrand,
} from '../../index';

/* eslint-disable react/jsx-key */
const checkboxes = [
	<Checkbox label="Guardian Today: UK" value="today_uk" />,
	<Checkbox label="Guardian Today: US" value="today_us" />,
];
/* eslint-enable react/jsx-key */

const legendSupportingLight = () => (
	<ThemeProvider theme={checkboxDefault}>
		<CheckboxGroup
			name="emails"
			label="Email newsletters"
			supporting="Select as many as you like"
			id="emails"
		>
			{checkboxes.map((checkbox, index) =>
				React.cloneElement(checkbox, { key: index }),
			)}
		</CheckboxGroup>
	</ThemeProvider>
);

legendSupportingLight.story = {
	name: 'legend and supporting text light',
};

const legendSupportingBlue = () => (
	<ThemeProvider theme={checkboxBrand}>
		<CheckboxGroup
			name="emails"
			label="Email newsletters"
			supporting="Select as many as you like"
			id="emails"
		>
			{checkboxes.map((checkbox, index) =>
				React.cloneElement(checkbox, { key: index }),
			)}
		</CheckboxGroup>
	</ThemeProvider>
);

legendSupportingBlue.story = {
	name: 'legend and supporting text blue',
	parameters: {
		backgrounds: {
			default: 'brand',
			values: [storybookBackgrounds.brand],
		},
	},
};

export { legendSupportingLight, legendSupportingBlue };
