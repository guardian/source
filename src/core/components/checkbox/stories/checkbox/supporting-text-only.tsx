import { css } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { storybookBackgrounds } from '@guardian/src-helpers';

import {
	CheckboxGroup,
	Checkbox,
	checkboxDefault,
	checkboxBrand,
} from '../../index';

/* eslint-disable react/jsx-key */
const checkboxesWithSupportingTextOnly = [
	<Checkbox
		value="jobs"
		supporting="Receive tips, Job Match recommendations, and advice from Guardian Jobs on taking your next career step."
	/>,
	<Checkbox
		value="holidays"
		supporting="Ideas and inspiration for your next trip away, as well as the latest offers from Guardian Holidays"
		defaultChecked={true}
	/>,
	<Checkbox
		value="events"
		supporting={
			<>
				Learn from leading minds at our{' '}
				<strong>Guardian live events</strong>, including discussions and
				debates, courses and training
			</>
		}
	/>,
];
/* eslint-enable react/jsx-key */

const narrow = css`
	width: 30rem;
`;

const supportingTextOnlyLight = () => (
	<div css={narrow}>
		<ThemeProvider theme={checkboxDefault}>
			<CheckboxGroup name="emails">
				{checkboxesWithSupportingTextOnly.map((checkbox, index) =>
					React.cloneElement(checkbox, { key: index }),
				)}
			</CheckboxGroup>
		</ThemeProvider>
	</div>
);

supportingTextOnlyLight.story = {
	name: 'supporting text only light',
};

const supportingTextOnlyBlue = () => (
	<div css={narrow}>
		<ThemeProvider theme={checkboxBrand}>
			<CheckboxGroup name="emails">
				{checkboxesWithSupportingTextOnly.map((checkbox, index) =>
					React.cloneElement(checkbox, { key: index }),
				)}
			</CheckboxGroup>
		</ThemeProvider>
	</div>
);

supportingTextOnlyBlue.story = {
	name: 'supporting text only blue',
	parameters: {
		backgrounds: {
			default: 'brand',
			values: [storybookBackgrounds.brand],
		},
	},
};

export { supportingTextOnlyLight, supportingTextOnlyBlue };
