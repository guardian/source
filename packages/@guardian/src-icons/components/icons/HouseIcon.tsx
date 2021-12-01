import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const HouseIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18.9999 20.9999L19.9999 19.9999V9.37497L12.6 2H11.4L4 9.37497V19.9999L5 20.9999H9.49998V14.5H14.5V20.9999H18.9999Z"
			/>
		</svg>
	);
};
