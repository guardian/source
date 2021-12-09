import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const AudioMuteIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2 15.75H5.74998L11 20.9999H12V3H11L5.74998 8.24998H2L1 9.24998V14.75L2 15.75ZM17.28 12L13.88 15.85L14.605 16.575L18.43 13.15L22.28 16.575L23.005 15.85L19.58 12L23.005 8.14998L22.28 7.42498L18.43 10.85L14.605 7.42498L13.88 8.14998L17.28 12Z"
			/>
		</svg>
	);
};
