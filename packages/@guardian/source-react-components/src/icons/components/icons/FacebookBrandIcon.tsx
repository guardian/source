import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const FacebookBrandIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.57501 6.12498V9.24997H6.15002V12.7H9.57501V22.9999H13.7V12.7H17.075L17.825 9.24997H13.7V6.49998C13.7 4.97499 14.6 4.44999 15.775 4.44999H17.825L17.7 1.175C16.675 1.075 15.875 1 14.7 1C11.775 1 9.57501 2.82499 9.57501 6.12498Z"
				fill="#1877F2"
			/>
		</svg>
	);
};