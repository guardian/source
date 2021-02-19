import { ThemeProvider } from '@emotion/react';

import { Checkbox, checkboxDefault } from '../../index';

/* eslint-disable react/jsx-key */
const checkboxes = [
	<Checkbox label="Guardian Today: UK" value="today_uk" name="emails" />,
	<Checkbox label="Guardian Today: US" value="today_us" name="emails" />,
];
/* eslint-enable react/jsx-key */

const ungrouped = () => (
	<ThemeProvider theme={checkboxDefault}>
		{checkboxes.map((checkbox, index) =>
			React.cloneElement(checkbox, { key: index }),
		)}
	</ThemeProvider>
);

ungrouped.story = {
	name: 'ungrouped',
};

export { ungrouped };
