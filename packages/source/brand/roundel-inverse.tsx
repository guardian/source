import React from 'react';
import { SvgRoundelFilled } from './roundel-filled';
import { neutral } from '../foundations/src/palette';

export const SvgRoundelInverse = () => {
	return <SvgRoundelFilled text={neutral[7]} background="white" />;
};
