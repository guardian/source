import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const ClockIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M22 12C22 17.5227 17.5227 22 12 22C6.47727 22 2 17.5227 2 12C2 6.47727 6.47727 2 12 2C17.5227 2 22 6.47727 22 12ZM13.0909 11.6818L12.4318 3.81819H11.5455L10.8637 12.3409L12.0228 13.5L18.3637 12.9091V12L13.0909 11.6818Z"
			/>
		</svg>
	);
};
