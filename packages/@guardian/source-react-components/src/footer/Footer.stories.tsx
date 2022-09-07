import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
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

export const Playground = Template.bind({});
Playground.args = {
	showBackToTop: false,
	children: 'with',
};
asPlayground(Playground);

export const DefaultDefaultTheme = Template.bind({});
DefaultDefaultTheme.args = { children: 'with' };
asChromaticStory(DefaultDefaultTheme);

export const DefaultTabletDefaultTheme = Template.bind({});
DefaultTabletDefaultTheme.args = { children: 'with' };
DefaultTabletDefaultTheme.parameters = {
	viewport: { defaultViewport: 'tablet' },
};
asChromaticStory(DefaultTabletDefaultTheme);

export const DefaultMobileDefaultTheme = Template.bind({});
DefaultMobileDefaultTheme.args = { children: 'with' };
DefaultMobileDefaultTheme.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
};
asChromaticStory(DefaultMobileDefaultTheme);

export const WithBackToTopDefaultTheme = Template.bind({});
WithBackToTopDefaultTheme.args = { showBackToTop: true, children: 'with' };
asChromaticStory(WithBackToTopDefaultTheme);

export const WithBackToTopTabletDefaultTheme = Template.bind({});
WithBackToTopTabletDefaultTheme.args = {
	showBackToTop: true,
	children: 'with',
};
WithBackToTopTabletDefaultTheme.parameters = {
	viewport: { defaultViewport: 'tablet' },
};
asChromaticStory(WithBackToTopTabletDefaultTheme);

export const WithBackToTopMobileDefaultTheme = Template.bind({});
WithBackToTopMobileDefaultTheme.args = {
	showBackToTop: true,
	children: 'with',
};
WithBackToTopMobileDefaultTheme.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
};
asChromaticStory(WithBackToTopMobileDefaultTheme);

export const WithoutChildrenDefaultTheme = Template.bind({});
WithoutChildrenDefaultTheme.args = { children: 'without' };
asChromaticStory(WithoutChildrenDefaultTheme);

export const WithoutChildrenTabletDefaultTheme = Template.bind({});
WithoutChildrenTabletDefaultTheme.args = { children: 'without' };
WithoutChildrenTabletDefaultTheme.parameters = {
	viewport: { defaultViewport: 'tablet' },
};
asChromaticStory(WithoutChildrenTabletDefaultTheme);

export const WithoutChildrenMobileDefaultTheme = Template.bind({});
WithoutChildrenMobileDefaultTheme.args = { children: 'without' };
WithoutChildrenMobileDefaultTheme.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
};
asChromaticStory(WithoutChildrenMobileDefaultTheme);

export const WithoutChildrenWithBackToTopDefaultTheme = Template.bind({});
WithoutChildrenWithBackToTopDefaultTheme.args = {
	showBackToTop: true,
	children: 'without',
};
asChromaticStory(WithoutChildrenWithBackToTopDefaultTheme);

export const WithoutChildrenWithBackToTopTabletDefaultTheme = Template.bind({});
WithoutChildrenWithBackToTopTabletDefaultTheme.args = {
	showBackToTop: true,
	children: 'without',
};
WithoutChildrenWithBackToTopTabletDefaultTheme.parameters = {
	viewport: { defaultViewport: 'tablet' },
};
asChromaticStory(WithoutChildrenWithBackToTopTabletDefaultTheme);

export const WithoutChildrenWithBackToTopMobileDefaultTheme = Template.bind({});
WithoutChildrenWithBackToTopMobileDefaultTheme.args = {
	showBackToTop: true,
	children: 'without',
};
WithoutChildrenWithBackToTopMobileDefaultTheme.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
};
asChromaticStory(WithoutChildrenWithBackToTopMobileDefaultTheme);
