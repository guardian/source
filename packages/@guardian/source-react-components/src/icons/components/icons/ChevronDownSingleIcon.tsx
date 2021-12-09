import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const ChevronDownSingleIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1 7.22434L11.4977 17.7221H12.5023L23 7.22434L22.0205 6.27L12 14.7084L1.97945 6.27L1 7.22434Z"
			/>
		</svg>
	);
};
