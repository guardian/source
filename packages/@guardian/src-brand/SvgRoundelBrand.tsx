import { SvgRoundel } from './SvgRoundel';
import { brand } from '@guardian/src-foundations/palette';

export type SvgRoundelBrandProps = {
	/**
	 * The width the SVG will display at (height is automatically adjusted
	 * to maintain the correct aspect ratio).
	 */
	width?: number;
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-brand-svgroundelbrand--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/8909e0-assets/t/37168b) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/src-brand) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-brand)
 */
export const SvgRoundelBrand = (args: SvgRoundelBrandProps) => {
	return (
		<SvgRoundel textColor="white" backgroundColor={brand[400]} {...args} />
	);
};
SvgRoundelBrand.args = {
	width: 300,
};
