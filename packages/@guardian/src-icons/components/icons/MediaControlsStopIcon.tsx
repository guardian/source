import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const MediaControlsStopIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19 18V6L18 5H6L5 6V18L6 19H18L19 18Z"
			/>
		</svg>
	);
};
