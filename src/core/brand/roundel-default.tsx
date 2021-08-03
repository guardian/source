import { SvgRoundel } from './SvgRoundel';
import { neutral } from '@guardian/src-foundations/palette';

export type SvgRoundelDefaultProps = {
	width?: number;
};

export const SvgRoundelDefault = (args: SvgRoundelDefaultProps) => {
	return <SvgRoundel textColor="white" bgColor={neutral[7]} {...args} />;
};
