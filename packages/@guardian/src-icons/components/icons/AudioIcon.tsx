import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const AudioIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2 15.75H5.74998L11 20.9999H12V3H11L5.74998 8.24998H2L1 9.24998V14.75L2 15.75ZM21.2999 12C21.2999 14.7 20.3749 17.175 18.7999 19.1749L19.3499 19.6999C21.5749 17.8749 22.9999 15.125 22.9999 12C22.9999 8.87498 21.5749 6.09999 19.3499 4.275L18.7999 4.79999C20.3749 6.79999 21.2999 9.27498 21.2999 12ZM16.0999 12C16.0999 13.575 15.675 14.975 14.825 16.2L15.475 16.85C16.7499 15.575 17.4999 13.9 17.4999 12C17.4999 10.075 16.7499 8.39998 15.475 7.12499L14.825 7.77498C15.675 8.99998 16.0999 10.425 16.0999 12Z"
			/>
		</svg>
	);
};
