import { SvgRoundel } from './SvgRoundel';
import { neutral } from '@guardian/src-foundations/palette';

export type SvgRoundelInverseProps = {
	/**
	 * The width the SVG will display at (height is automatically adjusted
	 * to maintain the correct aspect ratio).
	 */
	width?: number;
};

export const SvgRoundelInverse = (args: SvgRoundelInverseProps) => {
	return <SvgRoundel textColor={neutral[7]} bgColor="white" {...args} />;
};
