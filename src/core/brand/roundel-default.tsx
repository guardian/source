import React from 'react';
import { SvgRoundelFilled } from './roundel-filled';
import { neutral } from '../foundations/src/palette';

export const SvgRoundelDefault = () => {
	return <SvgRoundelFilled text="white" background={neutral[7]} />;
};
