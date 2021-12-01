import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const SvgAlertRound = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 30 30"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M25.9999 15C25.9999 21.0749 21.0749 25.9999 15 25.9999C8.92498 25.9999 4 21.0749 4 15C4 8.92498 8.92498 4 15 4C21.0749 4 25.9999 8.92498 25.9999 15ZM14.225 17H15.75L16.475 7.49999L15.475 6.49999H14.5L13.5 7.49999L14.225 17ZM16.5 20.9999C16.5 20.1749 15.825 19.4999 15 19.4999C14.175 19.4999 13.5 20.1749 13.5 20.9999C13.5 21.8249 14.175 22.4999 15 22.4999C15.825 22.4999 16.5 21.8249 16.5 20.9999Z"
			/>
		</svg>
	);
};
