import { Footer, FooterProps } from './Footer';
import { asChromaticStory, asPlayground } from '../../../../lib/story-intents';
import { Story } from '../../../../lib/@types/storybook-emotion-10-fixes';

export default {
	component: Footer,
	title: 'Source/src-footer/Footer',
	argTypes: {
		children: {
			options: ['with', 'without'],
			mapping: {
				without: undefined,
				with: (
					<p>
						<strong>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</strong>
						<br />
						Ut proverbia non nulla veriora sint quam vestra dogmata.
						Ampulla enim sit necne sit, quis non iure optimo
						irrideatur, si laboret? Quae quo sunt excelsiores, eo
						dant clariora indicia naturae.
					</p>
				),
			},
			control: { type: 'radio' },
		},
	},
};

const Template: Story = (args: FooterProps) => <Footer {...args} />;

export const Demo = Template.bind({});
Demo.args = {
	showBackToTop: false,
	children: 'with',
};
asPlayground(Demo);

export const Default = Template.bind({});
Default.args = { children: 'with' };
asChromaticStory(Default);

export const DefaultTablet = Template.bind({});
DefaultTablet.args = { children: 'with' };
DefaultTablet.parameters = {
	viewport: { defaultViewport: 'tablet' },
};
asChromaticStory(DefaultTablet);

export const DefaultMobile = Template.bind({});
DefaultMobile.args = { children: 'with' };
DefaultMobile.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
};
asChromaticStory(DefaultMobile);

export const WithBackToTop = Template.bind({});
WithBackToTop.args = { showBackToTop: true, children: 'with' };
asChromaticStory(WithBackToTop);

export const WithBackToTopTablet = Template.bind({});
WithBackToTopTablet.args = {
	showBackToTop: true,
	children: 'with',
};
WithBackToTopTablet.parameters = {
	viewport: { defaultViewport: 'tablet' },
};
asChromaticStory(WithBackToTopTablet);

export const WithBackToTopMobile = Template.bind({});
WithBackToTopMobile.args = {
	showBackToTop: true,
	children: 'with',
};
WithBackToTopMobile.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
};
asChromaticStory(WithBackToTopMobile);

export const WithoutChildren = Template.bind({});
WithoutChildren.args = { children: 'without' };
asChromaticStory(WithoutChildren);

export const WithoutChildrenTablet = Template.bind({});
WithoutChildrenTablet.args = { children: 'without' };
WithoutChildrenTablet.parameters = {
	viewport: { defaultViewport: 'tablet' },
};
asChromaticStory(WithoutChildrenTablet);

export const WithoutChildrenMobile = Template.bind({});
WithoutChildrenMobile.args = { children: 'without' };
WithoutChildrenMobile.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
};
asChromaticStory(WithoutChildrenMobile);

export const WithoutChildrenWithBackToTop = Template.bind({});
WithoutChildrenWithBackToTop.args = {
	showBackToTop: true,
	children: 'without',
};
asChromaticStory(WithoutChildrenWithBackToTop);

export const WithoutChildrenWithBackToTopTablet = Template.bind({});
WithoutChildrenWithBackToTopTablet.args = {
	showBackToTop: true,
	children: 'without',
};
WithoutChildrenWithBackToTopTablet.parameters = {
	viewport: { defaultViewport: 'tablet' },
};
asChromaticStory(WithoutChildrenWithBackToTopTablet);

export const WithoutChildrenWithBackToTopMobile = Template.bind({});
WithoutChildrenWithBackToTopMobile.args = {
	showBackToTop: true,
	children: 'without',
};
WithoutChildrenWithBackToTopMobile.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
};
asChromaticStory(WithoutChildrenWithBackToTopMobile);
