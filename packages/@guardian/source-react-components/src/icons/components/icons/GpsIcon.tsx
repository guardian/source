import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const GpsIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.59998 10.725L2.64998 11.4L10.2499 13.3L12.6249 21.4499L13.3999 21.4999L21.3999 3.2L20.6999 2.5L2.59998 10.725Z"
			/>
		</svg>
	);
};
