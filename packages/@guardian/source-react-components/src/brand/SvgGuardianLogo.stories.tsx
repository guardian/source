import type { Story } from '@storybook/react';
import type { SvgGuardianLogoProps } from './SvgGuardianLogo';
import { SvgGuardianLogo } from './SvgGuardianLogo';

export default {
	title: 'Packages/source-react-components/SvgGuardianLogo',
	component: SvgGuardianLogo,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

const Template: Story = (args: SvgGuardianLogoProps) => (
	<SvgGuardianLogo {...args} />
);

export const Default = Template.bind({});
