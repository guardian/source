import { SvgRoundel } from './SvgRoundel';
import { neutral } from '@guardian/src-foundations/palette';

export type SvgRoundelInverseProps = {
	width?: number;
};

export const SvgRoundelInverse = (args: SvgRoundelInverseProps) => {
	return <SvgRoundel textColor={neutral[7]} bgColor="white" {...args} />;
};
