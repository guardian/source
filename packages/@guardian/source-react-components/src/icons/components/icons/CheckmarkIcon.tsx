import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const CheckmarkIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.01138 11.8835L2 12.8948L7.05689 19.9745H7.53729L22 5.00609L20.9886 4.02L7.53729 16.2071L3.01138 11.8835Z"
			/>
		</svg>
	);
};
