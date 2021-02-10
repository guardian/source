import React from 'react';
import { css } from '@emotion/react';
import { storybookBackgrounds } from '@guardian/src-helpers';
import { RadioGroup, Radio, radioDefault, radioBrand } from '../../index';
import { ThemeProvider } from '@emotion/react';

/* eslint-disable react/jsx-key */
const radiosWithSupportingTextOnly = [
	<Radio
		value="6-for-6"
		supporting="£6 for the first 6 issues (then £37.50 every quarter)"
	/>,
	<Radio
		value="quarterly"
		supporting="£37.50 every quarter"
		defaultChecked={true}
	/>,
	<Radio
		value="annual"
		supporting={
			<>
				Subscribe for <strong>12 months</strong> and save 10% £135 for 1
				year then standard rate (£150 every year)
			</>
		}
	/>,
];
/* eslint-enable react/jsx-key */

const narrow = css`
	width: 30rem;
`;

const supportingTextOnlyLight = () => (
	<ThemeProvider theme={radioDefault}>
		<div css={narrow}>
			<RadioGroup name="payment-options">
				{radiosWithSupportingTextOnly.map((radio, index) =>
					React.cloneElement(radio, { key: index }),
				)}
			</RadioGroup>
		</div>
	</ThemeProvider>
);
supportingTextOnlyLight.story = {
	name: `supporting text only default`,
	parameters: {
		backgrounds: {
			default: 'default',
			values: [storybookBackgrounds.default],
		},
	},
};

const supportingTextOnlyBlue = () => (
	<ThemeProvider theme={radioBrand}>
		<div css={narrow}>
			<RadioGroup name="payment-options">
				{radiosWithSupportingTextOnly.map((radio, index) =>
					React.cloneElement(radio, { key: index }),
				)}
			</RadioGroup>
		</div>
	</ThemeProvider>
);
supportingTextOnlyBlue.story = {
	name: `supporting text only brand`,
	parameters: {
		backgrounds: {
			default: 'brand',
			values: [storybookBackgrounds.brand],
		},
	},
};

export { supportingTextOnlyLight, supportingTextOnlyBlue };
