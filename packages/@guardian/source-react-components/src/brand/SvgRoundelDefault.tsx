import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { neutral } from '@guardian/source-foundations';
import { SvgRoundel } from './SvgRoundel';

export type SvgRoundelDefaultProps = {
	/**
	 * The width the SVG will display at (height is automatically adjusted
	 * to maintain the correct aspect ratio).
	 */
	width?: number;
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-brand-svgroundeldefault--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/8909e0-assets/t/37168b) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/src-brand) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-brand)
 */
export const SvgRoundelDefault = (
	args: SvgRoundelDefaultProps,
): EmotionJSX.Element => {
	return (
		<SvgRoundel textColor="white" backgroundColor={neutral[7]} {...args} />
	);
};
