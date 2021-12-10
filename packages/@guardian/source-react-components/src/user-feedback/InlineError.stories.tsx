import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import { storybookBackgrounds } from '../../../src-helpers/storybook-bg';
import { InlineError } from './InlineError';
import { userFeedbackThemeBrand } from './theme';
import type { UserFeedbackProps } from './types';

export default {
	title: 'Packages/source-react-components/InlineError',
	component: InlineError,
};

const Template: Story<UserFeedbackProps> = ({
	children,
	...args
}: UserFeedbackProps) => (
	<InlineError {...args}>{children ?? 'Please enter your name'}</InlineError>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const InlineErrorDefaultTheme = Template.bind({});
asChromaticStory(InlineErrorDefaultTheme);

// *****************************************************************************

export const InlineErrorBrandTheme = Template.bind({});
InlineErrorBrandTheme.parameters = {
	backgrounds: {
		default: 'brand',
		values: [storybookBackgrounds.brand],
	},
	theme: userFeedbackThemeBrand,
};
asChromaticStory(InlineErrorBrandTheme);

// *****************************************************************************

export const LongInlineErrorDefaultThemeMobile = Template.bind({});
LongInlineErrorDefaultThemeMobile.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
};
LongInlineErrorDefaultThemeMobile.args = {
	children: 'Please pick a date in the future, but not a leap year',
};

asChromaticStory(LongInlineErrorDefaultThemeMobile);

// *****************************************************************************