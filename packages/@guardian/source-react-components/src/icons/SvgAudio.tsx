import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgAudio = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 30 30"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5 18.75H8.74998L14 23.9999H15V6H14L8.74998 11.25H5L4 12.25V17.75L5 18.75ZM24.2999 15C24.2999 17.7 23.3749 20.175 21.7999 22.1749L22.3499 22.6999C24.5749 20.8749 25.9999 18.125 25.9999 15C25.9999 11.875 24.5749 9.09999 22.3499 7.275L21.7999 7.79999C23.3749 9.79999 24.2999 12.275 24.2999 15ZM19.0999 15C19.0999 16.575 18.675 17.975 17.825 19.2L18.475 19.85C19.7499 18.575 20.4999 16.9 20.4999 15C20.4999 13.075 19.7499 11.4 18.475 10.125L17.825 10.775C18.675 12 19.0999 13.425 19.0999 15Z"
			/>
		</svg>
	);
};
