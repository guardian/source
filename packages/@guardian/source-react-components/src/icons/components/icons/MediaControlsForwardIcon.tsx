import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const MediaControlsForwardIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.5119 11.6325L1.57565 5L1 5.42548V18.5904L1.57565 19.0159L11.5119 12.3834V11.6325ZM23 11.6325L13.0387 5L12.4881 5.42548V18.5904L13.0387 19.0159L23 12.3834V11.6325Z"
			/>
		</svg>
	);
};
