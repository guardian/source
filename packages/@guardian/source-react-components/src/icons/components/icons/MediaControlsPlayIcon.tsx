import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const MediaControlsPlayIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20.075 12.35V11.65L4.47502 5.2L3.90002 5.65V18.35L4.47502 18.75L20.075 12.35Z"
			/>
		</svg>
	);
};
