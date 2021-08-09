import { Footer, FooterProps } from './Footer';
import type { Story } from '../../../@types/storybook-emotion-10-fixes';

export default {
	component: Footer,
	title: 'Source/src-footer/Footer',
};

export const Demo: Story = (args: FooterProps) => (
	<Footer {...args}>
		<p>
			<strong>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</strong>
			<br />
			Ut proverbia non nulla veriora sint quam vestra dogmata. Ampulla
			enim sit necne sit, quis non iure optimo irrideatur, si laboret?
			Quae quo sunt excelsiores, eo dant clariora indicia naturae.
		</p>
	</Footer>
);
Demo.args = {
	showBackToTop: false,
};

export const DefaultTablet = Demo.bind({});
DefaultTablet.parameters = {
	viewport: { defaultViewport: 'tablet' },
	controls: { disabled: true },
};

export const DefaultMobile = Demo.bind({});
DefaultMobile.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
	controls: { disabled: true },
};

export const WithBackToTop = Demo.bind({});
WithBackToTop.args = { showBackToTop: true };
WithBackToTop.parameters = { controls: { disabled: true } };

export const WithBackToTopTablet = Demo.bind({});
WithBackToTopTablet.args = { showBackToTop: true };
WithBackToTopTablet.parameters = {
	viewport: { defaultViewport: 'tablet' },
	controls: { disabled: true },
};

export const WithBackToTopMobile = Demo.bind({});
WithBackToTopMobile.args = { showBackToTop: true };
WithBackToTopMobile.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
	controls: { disabled: true },
};

export const WithoutChildren = (args: FooterProps) => <Footer {...args} />;
WithoutChildren.parameters = {
	controls: { disabled: true },
};

export const WithoutChildrenTablet = (args: FooterProps) => (
	<Footer {...args} />
);
WithoutChildrenTablet.parameters = {
	viewport: { defaultViewport: 'tablet' },
	controls: { disabled: true },
};

export const WithoutChildrenMobile = (args: FooterProps) => (
	<Footer {...args} />
);
WithoutChildrenMobile.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
	controls: { disabled: true },
};

export const WithoutChildrenWithBackToTop = (args: FooterProps) => (
	<Footer {...args} />
);
WithoutChildrenWithBackToTop.args = { showBackToTop: true };
WithoutChildrenWithBackToTop.parameters = {
	controls: { disabled: true },
};

export const WithoutChildrenWithBackToTopTablet = (args: FooterProps) => (
	<Footer {...args} />
);
WithoutChildrenWithBackToTopTablet.args = { showBackToTop: true };
WithoutChildrenWithBackToTopTablet.parameters = {
	viewport: { defaultViewport: 'tablet' },
	controls: { disabled: true },
};

export const WithoutChildrenWithBackToTopMobile = (args: FooterProps) => (
	<Footer {...args} />
);
WithoutChildrenWithBackToTopMobile.args = { showBackToTop: true };
WithoutChildrenWithBackToTopMobile.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
	controls: { disabled: true },
};
