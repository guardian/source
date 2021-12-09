import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const PersonTickIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.4 9.49997C12.225 9.49997 14.375 7.44998 14.375 4.94999C14.375 2.45 12.9 1 10.4 1C7.9 1 6.45001 2.45 6.45001 4.94999C6.45001 7.44998 8.775 9.49997 10.4 9.49997ZM16.15 11.5L17.225 10.45L18.325 11.575L21.6 8.29997L22.65 9.37497L18.325 13.7L17.275 12.625L16.15 11.5ZM10.4 11.5C11.475 11.5 12.5 11.575 13.425 11.75C13.7 14.35 15.75 16.4499 18.3 16.8999L19.4 20.9999L18.375 21.9999H2.37502L1.40002 20.9999L3.37502 13.5L4.40001 12.475C6.40001 11.8 8.2 11.5 10.4 11.5Z"
			/>
		</svg>
	);
};
