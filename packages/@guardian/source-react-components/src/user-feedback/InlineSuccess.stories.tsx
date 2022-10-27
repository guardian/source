import type { Story } from '@storybook/react';
import { InlineSuccess } from './InlineSuccess';
import { userFeedbackThemeBrand } from './theme';
import type { UserFeedbackProps } from './types';

export default {
	title: 'Packages/source-react-components/InlineSuccess',
	component: InlineSuccess,
};

const Template: Story<UserFeedbackProps> = (args: UserFeedbackProps) => (
	<InlineSuccess {...args}>Your voucher code is valid</InlineSuccess>
);

export const InlineSuccessDefaultTheme = Template.bind({});

// *****************************************************************************

export const InlineSuccessBrandTheme = Template.bind({});
InlineSuccessBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: userFeedbackThemeBrand,
};
