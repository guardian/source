import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgPaperclip = ({ size }: IconProps): EmotionJSX.Element => {
	return (
		<svg
			viewBox="0 0 15 15"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path d="M5.725,13.348c-0.979,1.021-2.6,1.055-3.623,0.076c-1.02-0.979-1.055-2.602-0.076-3.623l8.424-8.79 c0.732-0.766,1.95-0.792,2.717-0.057c0.768,0.734,0.791,1.949,0.059,2.715l-6.894,7.193C5.84,11.375,5.03,11.393,4.52,10.9 c-0.511-0.488-0.528-1.299-0.04-1.81l5.324-5.553l0.337,0.321L4.816,9.413c-0.311,0.325-0.3,0.84,0.025,1.152 c0.326,0.312,0.841,0.301,1.15-0.024l6.896-7.193c0.557-0.581,0.536-1.501-0.043-2.058c-0.581-0.557-1.504-0.537-2.058,0.043 l-8.427,8.79c-0.798,0.837-0.771,2.163,0.063,2.965c0.836,0.802,2.164,0.772,2.965-0.062l6.853-7.152l0.338,0.323L5.725,13.348z" />
		</svg>
	);
};
