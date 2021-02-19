import { storybookBackgrounds } from '@guardian/src-helpers';
import { Footer } from '../index';

export const backToTopBlue = () => <Footer showBackToTop={true} />;

backToTopBlue.story = {
	name: 'back to top blue',
	parameters: {
		backgrounds: {
			default: 'brand',
			values: [storybookBackgrounds.brand],
		},
	},
};

export const backToTopBlueTablet = () => <Footer showBackToTop={true} />;

backToTopBlueTablet.story = {
	name: 'back to top blue tablet',
	parameters: {
		backgrounds: {
			default: 'brand',
			values: [storybookBackgrounds.brand],
		},
		viewport: { defaultViewport: 'tablet' },
	},
};

export const backToTopBlueMobile = () => <Footer showBackToTop={true} />;

backToTopBlueMobile.story = {
	name: 'back to top blue mobile',
	parameters: {
		backgrounds: {
			default: 'brand',
			values: [storybookBackgrounds.brand],
		},
		viewport: { defaultViewport: 'mobileMedium' },
	},
};
