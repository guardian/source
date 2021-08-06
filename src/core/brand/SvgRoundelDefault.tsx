import { SvgRoundel } from './SvgRoundel';
import { neutral } from '@guardian/src-foundations/palette';

export type SvgRoundelDefaultProps = {
	/**
	 * The width the SVG will display at (height is automatically adjusted
	 * to maintain the correct aspect ratio).
	 */
	width?: number;
};

export const SvgRoundelDefault = (args: SvgRoundelDefaultProps) => {
	return (
		<SvgRoundel textColor="white" backgroundColor={neutral[7]} {...args} />
	);
};
