import { Label, labelBrand } from '../index';
import { ThemeProvider } from '@emotion/react';
import { storybookBackgrounds } from '@guardian/src-helpers';

export const defaultLight = () => <Label text="First name" />;

defaultLight.story = {
	name: 'default light',
};

export const defaultBlue = () => (
	<ThemeProvider theme={labelBrand}>
		<Label text="First name" />
	</ThemeProvider>
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
