import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const CameraIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M22.9999 6.49999V17.4749L21.5249 19.0249H2.49999L1 17.5499V6.49999L2.49999 4.99999H7.47498L9.97497 2.5H14L16.4999 4.99999H21.5249L22.9999 6.49999ZM12 16.25C14.5 16.25 16.5249 14.25 16.5249 11.775C16.5249 9.27498 14.5 7.27498 12 7.27498C9.49997 7.27498 7.49998 9.27498 7.49998 11.775C7.49998 14.25 9.49997 16.25 12 16.25Z"
			/>
		</svg>
	);
};
