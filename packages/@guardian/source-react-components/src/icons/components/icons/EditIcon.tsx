import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const EditIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.43 6.47499L19.105 6.17499L13.455 11.85L13.105 11.475L21.605 3L23.0049 4.4L14.53 12.9L13.755 12.15L19.43 6.47499ZM12.255 14.1L11.88 13.75L12.73 11.85L14.155 13.25L12.255 14.1ZM1.975 20.9999L1 19.9749V7.99998L1.975 6.99999H11V7.99998L9.99997 8.99998H2.99999V18.9999H18.9999V14L19.9749 13H20.9999V19.9749L19.9749 20.9999H1.975Z"
			/>
		</svg>
	);
};