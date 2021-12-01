import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const MediaControlsPauseIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.99999 5H7L6 6V19H9.99999V5ZM14 19H17L18 18V5H14V19Z"
			/>
		</svg>
	);
};
