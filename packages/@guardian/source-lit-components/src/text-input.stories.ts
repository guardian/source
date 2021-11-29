import { html } from 'lit';
import './index';

export default {
	title: 'Source/text-input/TextInput',
};

const onChange = (e: Event) => console.log(e && e.target && e.target.value);

const Template = () => {
	return html` <text-input
		label="Label"
		supporting="Supporting"
	></text-input>`;
};

// *****************************************************************************

export const Playground = Template.bind({});
