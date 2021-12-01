import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const VideoIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.99999 5L1 6.99999V17L2.99999 19H14.5V5H2.99999ZM21.4999 5.5L16.4999 10.5V13.5L21.4999 18.5H22.9999V5.5H21.4999Z"
			/>
		</svg>
	);
};
