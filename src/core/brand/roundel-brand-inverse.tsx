import { SvgRoundel } from './SvgRoundel';
import { brand } from '@guardian/src-foundations/palette';

export type SvgRoundelBrandInverseProps = {
	width?: number;
};

export const SvgRoundelBrandInverse = (args: SvgRoundelBrandInverseProps) => {
	return <SvgRoundel textColor={brand[400]} bgColor="white" {...args} />;
};
