import { breakpoints } from '@guardian/source-foundations';
import type { Story } from '@storybook/react';
import type { FooterProps } from './Footer';
import { Footer } from './Footer';

export default {
	component: Footer,
	title: 'Packages/source-react-components/Footer',
	argTypes: {
		children: {
			options: ['with', 'without'],
			mapping: {
				without: undefined,
				with: (
					<p>
						<strong>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</strong>
						<br />
						Ut proverbia non nulla veriora sint quam vestra dogmata. Ampulla
						enim sit necne sit, quis non iure optimo irrideatur, si laboret?
						Quae quo sunt excelsiores, eo dant clariora indicia naturae.
					</p>
				),
			},
			control: { type: 'radio' },
		},
	},
};

const Template: Story = (args: FooterProps) => <Footer {...args} />;

export const DefaultDefaultTheme = Template.bind({});
DefaultDefaultTheme.args = { children: 'with' };

export const DefaultTabletDefaultTheme = Template.bind({});
DefaultTabletDefaultTheme.args = { children: 'with' };
DefaultTabletDefaultTheme.parameters = {
	viewport: { defaultViewport: 'tablet' },
	chromatic: {
		viewports: [breakpoints.tablet],
	},
};

export const DefaultMobileDefaultTheme = Template.bind({});
DefaultMobileDefaultTheme.args = { children: 'with' };
DefaultMobileDefaultTheme.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
	chromatic: {
		viewports: [breakpoints.mobileMedium],
	},
};

export const WithBackToTopDefaultTheme = Template.bind({});
WithBackToTopDefaultTheme.args = { showBackToTop: true, children: 'with' };

export const WithBackToTopTabletDefaultTheme = Template.bind({});
WithBackToTopTabletDefaultTheme.args = {
	showBackToTop: true,
	children: 'with',
};
WithBackToTopTabletDefaultTheme.parameters = {
	viewport: { defaultViewport: 'tablet' },
	chromatic: {
		viewports: [breakpoints.tablet],
	},
};

export const WithBackToTopMobileDefaultTheme = Template.bind({});
WithBackToTopMobileDefaultTheme.args = {
	showBackToTop: true,
	children: 'with',
};
WithBackToTopMobileDefaultTheme.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
	chromatic: {
		viewports: [breakpoints.mobileMedium],
	},
};

export const WithoutChildrenDefaultTheme = Template.bind({});
WithoutChildrenDefaultTheme.args = { children: 'without' };

export const WithoutChildrenTabletDefaultTheme = Template.bind({});
WithoutChildrenTabletDefaultTheme.args = { children: 'without' };
WithoutChildrenTabletDefaultTheme.parameters = {
	viewport: { defaultViewport: 'tablet' },
	chromatic: {
		viewports: [breakpoints.tablet],
	},
};

export const WithoutChildrenMobileDefaultTheme = Template.bind({});
WithoutChildrenMobileDefaultTheme.args = { children: 'without' };
WithoutChildrenMobileDefaultTheme.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
	chromatic: {
		viewports: [breakpoints.mobileMedium],
	},
};

export const WithoutChildrenWithBackToTopDefaultTheme = Template.bind({});
WithoutChildrenWithBackToTopDefaultTheme.args = {
	showBackToTop: true,
	children: 'without',
};

export const WithoutChildrenWithBackToTopTabletDefaultTheme = Template.bind({});
WithoutChildrenWithBackToTopTabletDefaultTheme.args = {
	showBackToTop: true,
	children: 'without',
};
WithoutChildrenWithBackToTopTabletDefaultTheme.parameters = {
	viewport: { defaultViewport: 'tablet' },
	chromatic: {
		viewports: [breakpoints.tablet],
	},
};

export const WithoutChildrenWithBackToTopMobileDefaultTheme = Template.bind({});
WithoutChildrenWithBackToTopMobileDefaultTheme.args = {
	showBackToTop: true,
	children: 'without',
};
WithoutChildrenWithBackToTopMobileDefaultTheme.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
	chromatic: {
		viewports: [breakpoints.mobileMedium],
	},
};
