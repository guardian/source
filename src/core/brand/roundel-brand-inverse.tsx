import React from "react";
import { SvgRoundelFilled } from "./roundel-filled";
import { brand } from "@guardian/src-foundations/palette";

export const SvgRoundelBrandInverse = () => {
	return <SvgRoundelFilled text={brand[400]} background="white" />;
};
