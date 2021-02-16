import React from 'react';
import { css } from '@emotion/react';
import { Legend, labelBrand } from '../index';
import { ThemeProvider } from '@emotion/react';
import { storybookBackgrounds } from '../../../helpers';

const fieldsetReset = css`
	border: 0;
	padding: 0;
	margin: 0;
`;

export const defaultLight = () => (
	<fieldset css={fieldsetReset}>
		<Legend text="Subscribe to our newsletters" />
	</fieldset>
);

defaultLight.story = {
	name: 'default light',
};

export const defaultBlue = () => (
	<fieldset css={fieldsetReset}>
		<ThemeProvider theme={labelBrand}>
			<Legend text="Subscribe to our newsletters" />
		</ThemeProvider>
	</fieldset>
);

defaultBlue.story = {
	name: 'default blue',
	parameters: {
		backgrounds: {
			default: 'brand',
			values: [storybookBackgrounds.brand],
		},
	},
};
