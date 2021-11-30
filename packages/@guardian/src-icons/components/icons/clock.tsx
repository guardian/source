import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const SvgClock = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 30 30"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				d="M26 15c0 6.075-4.925 11-11 11S4 21.075 4 15 8.925 4 15 4s11 4.925 11 11zm-9.8-.35L15.475 6H14.5l-.75 9.375 1.275 1.275L22 16v-1l-5.8-.35z"
			/>
		</svg>
	);
};
