import { SvgRoundel } from './SvgRoundel';
import { brand } from '@guardian/src-foundations/palette';

export type SvgRoundelBrandProps = {
	/**
	 * The width the SVG will display at (height is automatically adjusted
	 * to maintain the correct aspect ratio).
	 */
	width?: number;
};

export const SvgRoundelBrand = (args: SvgRoundelBrandProps) => {
	return <SvgRoundel textColor="white" bgColor={brand[400]} {...args} />;
};
SvgRoundelBrand.args = {
	width: 300,
};
