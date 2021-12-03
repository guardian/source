import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const PersonCrossIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.3 9.49997C12.125 9.49997 14.275 7.44998 14.275 4.94999C14.275 2.45 12.8 1 10.3 1C7.80003 1 6.35003 2.45 6.35003 4.94999C6.35003 7.44998 8.67502 9.49997 10.3 9.49997ZM22.65 13.3L21.6 14.35L19.3 12.05L17 14.35L15.95 13.3L18.25 11L15.95 8.69997L17 7.64998L19.3 9.94997L21.6 7.64998L22.65 8.69997L20.35 11L22.65 13.3ZM10.3 11.5C11.375 11.5 12.4 11.575 13.325 11.75C13.6 14.35 15.65 16.4499 18.2 16.8999L19.3 20.9999L18.275 21.9999H2.27505L1.30005 20.9999L3.27504 13.5L4.30004 12.475C6.30003 11.8 8.10003 11.5 10.3 11.5Z"
			/>
		</svg>
	);
};
