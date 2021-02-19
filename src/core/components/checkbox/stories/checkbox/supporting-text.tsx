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
const checkboxesWithSupportingText = [
	<Checkbox
		value="jobs"
		label="Jobs"
		supporting="Receive tips, Job Match recommendations, and advice from Guardian Jobs on taking your next career step."
	/>,
	<Checkbox
		value="holidays"
		label="Holidays & Vacations"
		supporting="Ideas and inspiration for your next trip away, as well as the latest offers from Guardian Holidays"
		defaultChecked={true}
	/>,
	<Checkbox
		value="events"
		label="Events & Masterclasses"
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

const supportingTextLight = () => (
	<div css={narrow}>
		<ThemeProvider theme={checkboxDefault}>
			<CheckboxGroup name="emails">
				{checkboxesWithSupportingText.map((checkbox, index) =>
					React.cloneElement(checkbox, { key: index }),
				)}
			</CheckboxGroup>
		</ThemeProvider>
	</div>
);

supportingTextLight.story = {
	name: 'supporting text light',
};

const supportingTextBlue = () => (
	<div css={narrow}>
		<ThemeProvider theme={checkboxBrand}>
			<CheckboxGroup name="emails">
				{checkboxesWithSupportingText.map((checkbox, index) =>
					React.cloneElement(checkbox, { key: index }),
				)}
			</CheckboxGroup>
		</ThemeProvider>
	</div>
);

supportingTextBlue.story = {
	name: 'supporting text blue',
	parameters: {
		backgrounds: {
			default: 'brand',
			values: [storybookBackgrounds.brand],
		},
	},
};

export { supportingTextLight, supportingTextBlue };
