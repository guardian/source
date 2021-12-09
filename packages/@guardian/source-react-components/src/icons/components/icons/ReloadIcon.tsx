import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const ReloadIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.5882 1C7.82965 1 4.49708 2.90433 2.54263 5.78588L2.66792 6.46241L3.54491 6.98861L4.22145 6.81321C5.85015 4.50797 8.50619 2.9795 11.5882 2.9795C16.5244 2.9795 20.5836 7.03872 20.5836 12.0251C20.5836 16.9863 16.5244 21.0205 11.5882 21.0205C8.75676 21.0205 6.32623 19.7677 4.64742 17.7631L8.28068 17.1617V15.9089H1.8661L1.39001 16.385V23H2.61781L3.24423 19.2164C5.24878 21.5467 8.2055 23 11.5882 23C17.677 23 22.6133 18.0888 22.6133 12.0251C22.6133 5.91116 17.677 1 11.5882 1Z"
			/>
		</svg>
	);
};
