import { breakpoints } from '@guardian/source-foundations';
import type { Story } from '@storybook/react';
import { Logo } from './Logo';

export default {
	title: 'Packages/source-react-components-development-kitchen/Logo',
	component: Logo,
	args: {
		logoType: 'standard',
	},
	parameters: {
		backgrounds: {
			default: 'brandBackground.primary',
		},
	},
};

const TripleTemplate: Story = () => (
	<div>
		<Logo logoType="standard" />
		<br />
		<Logo logoType="anniversary" />
		<br />
		<Logo logoType="bestWebsite" />
	</div>
);

// *****************************************************************************

export const Desktop = TripleTemplate.bind({});
Desktop.parameters = {
	viewport: {
		defaultViewport: 'desktop',
	},
	chromatic: {
		viewports: [breakpoints.desktop],
	},
};

// *****************************************************************************

export const Tablet = TripleTemplate.bind({});
Tablet.parameters = {
	viewport: {
		defaultViewport: 'tablet',
	},
	chromatic: {
		viewports: [breakpoints.tablet],
	},
};

// *****************************************************************************

export const MobileMedium = TripleTemplate.bind({});
MobileMedium.parameters = {
	viewport: {
		defaultViewport: 'mobileMedium',
	},
	chromatic: {
		viewports: [breakpoints.mobileMedium],
	},
};

// *****************************************************************************

export const Mobile = TripleTemplate.bind({});
Mobile.parameters = {
	viewport: {
		defaultViewport: 'mobile',
	},
	chromatic: {
		viewports: [breakpoints.mobile],
	},
};

// *****************************************************************************
