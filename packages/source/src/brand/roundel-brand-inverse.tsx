import { SvgRoundelFilled } from './roundel-filled';
import { brand } from '../foundations/src/palette';

export const SvgRoundelBrandInverse = () => {
	return <SvgRoundelFilled text={brand[400]} background="white" />;
};
