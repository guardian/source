import { SvgRoundel } from './SvgRoundel';
import { brand } from '@guardian/src-foundations/palette';

export type SvgRoundelBrandInverseProps = {
	/**
	 * The width the SVG will display at (height is automatically adjusted
	 * to maintain the correct aspect ratio).
	 */
	width?: number;
};

export const SvgRoundelBrandInverse = (args: SvgRoundelBrandInverseProps) => {
	return (
		<SvgRoundel textColor={brand[400]} backgroundColor="white" {...args} />
	);
};
