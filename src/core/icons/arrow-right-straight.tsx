import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from './types';

export const SvgArrowRightStraight = ({ size }: IconProps) => (
	<svg
		viewBox="0 0 30 30"
		xmlns="http://www.w3.org/2000/svg"
		width={size ? iconSize[size] : undefined}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M4 15.95h19.125l-7.5 8.975.975.975 10.425-10.45v-1L16.6 4l-.975.975 7.5 8.975H4v2z"
		/>
	</svg>
);
