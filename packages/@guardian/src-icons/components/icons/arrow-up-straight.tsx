import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const SvgArrowUpStraight = ({ size }: IconProps) => (
	<svg
		viewBox="0 0 30 30"
		xmlns="http://www.w3.org/2000/svg"
		width={size ? iconSize[size] : undefined}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M15.95 26.025V6.9l8.975 7.5.975-.975L15.45 3h-1L4 13.425l.975.975 8.975-7.5v19.125h2z"
		/>
	</svg>
);
