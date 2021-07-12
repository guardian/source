import React from 'react';
import { css } from '@emotion/react';
import { Legend, labelBrand } from '../index';
import { ThemeProvider } from '@emotion/react';
import { storybookBackgrounds } from '@guardian/src-helpers';

const fieldsetReset = css`
	border: 0;
	padding: 0;
	margin: 0;
`;

const Image = () => (
	<div style={{ padding: `8px 0` }}>
		<img
			alt="test"
			src="https://i.guim.co.uk/img/media/9bd896505173dcf4adadd02e5f40a03414c50bdc/172_201_2329_1397/master/2329.jpg?width=620&quality=85&auto=format&fit=max&s=133b7c6ce78a0780e99e605bb3ae7479"
		/>
	</div>
);

export const withSupportingTextLight = () => (
	<fieldset css={fieldsetReset}>
		<Legend
			text="Subscribe to our newsletters"
			supporting="Select as many as you like"
		/>
	</fieldset>
);

withSupportingTextLight.story = {
	name: `with supporting text light`,
};

export const withSupportingTextBlue = () => (
	<fieldset css={fieldsetReset}>
		<ThemeProvider theme={labelBrand}>
			<Legend
				text="Subscribe to our newsletters"
				supporting="Select as many as you like"
			/>
		</ThemeProvider>
	</fieldset>
);

withSupportingTextBlue.story = {
	name: `with supporting text blue`,
	parameters: {
		backgrounds: {
			default: 'brand',
			values: [storybookBackgrounds.brand],
		},
	},
};

export const withSupportingMedia = () => (
	<fieldset css={fieldsetReset}>
		<Legend text="Subscribe to our newsletters" supporting={<Image />} />
	</fieldset>
);

withSupportingMedia.story = {
	name: `with supporting media`,
};
