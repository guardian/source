import { SvgRoundelFilled } from './roundel-filled';
import { brand } from '../foundations/src/palette';

export const SvgRoundelBrand = () => {
	return <SvgRoundelFilled text="white" background={brand[400]} />;
};
