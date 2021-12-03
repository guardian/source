import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const ChevronLeftSingleIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.7214 1L6.25 11.4714V12.5286L16.7214 23L17.7031 22.0435L9.32094 12L17.7031 1.95652L16.7214 1Z"
			/>
		</svg>
	);
};
