import React from 'react';
import { SvgRoundelFilled } from './roundel-filled';
import { brand } from '@guardian/src-foundations/palette';

export const SvgRoundelBrand = () => {
	return <SvgRoundelFilled text="white" background={brand[400]} />;
};
