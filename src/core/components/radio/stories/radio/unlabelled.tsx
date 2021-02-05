import React from 'react';
import { Radio, radioDefault } from '../../index';
import { ThemeProvider } from '@emotion/react';

const unlabelled = () => (
	<ThemeProvider theme={radioDefault}>
		<Radio value="red" defaultChecked={true} aria-label="Red" />
	</ThemeProvider>
);

unlabelled.story = {
	name: 'unlabelled',
};

export { unlabelled };
