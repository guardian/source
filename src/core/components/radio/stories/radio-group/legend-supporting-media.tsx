import React from 'react';
import { RadioGroup, Radio } from '../../index';

/* eslint-disable react/jsx-key */
const uncheckedRadios = [
	<Radio value="red" label="Red" />,
	<Radio value="green" label="Green" />,
	<Radio value="blue" label="Blue" />,
];

const Image = () => (
	<div style={{ padding: `8px 0` }}>
		<img
			alt="test"
			src="https://i.guim.co.uk/img/media/9bd896505173dcf4adadd02e5f40a03414c50bdc/172_201_2329_1397/master/2329.jpg?width=620&quality=85&auto=format&fit=max&s=133b7c6ce78a0780e99e605bb3ae7479"
		/>
	</div>
);

/* eslint-enable react/jsx-key */
export const legendSupportingMedia = () => (
	<RadioGroup
		name="colours"
		label="Select your preferred colour"
		supporting={<Image />}
	>
		{uncheckedRadios.map((radio, index) =>
			React.cloneElement(radio, { key: index }),
		)}
	</RadioGroup>
);
legendSupportingMedia.story = {
	name: `legend supporting media`,
};

/* eslint-enable react/jsx-key */
export const legendSupportingMediaWithError = () => (
	<RadioGroup
		name="colours"
		label="Select your preferred colour"
		supporting={<Image />}
		error="Please select a colour"
	>
		{uncheckedRadios.map((radio, index) =>
			React.cloneElement(radio, { key: index }),
		)}
	</RadioGroup>
);
legendSupportingMediaWithError.story = {
	name: ` legend supporting media with error`,
};
