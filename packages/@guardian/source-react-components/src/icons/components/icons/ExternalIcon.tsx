import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const ExternalIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M22.9999 10.75H21.7499L21.1499 6.22499L15.4 12L14 10.575L19.7249 4.82499L15.25 4.25V3H22.5249L22.9999 3.475V10.75ZM11 7.99998L9.97497 8.99998H2.99999V18.9999H18.9999V14L19.9749 13H20.9999V19.9749L19.9749 20.9999H1.975L1 19.9749V7.99998L1.975 6.99999H11V7.99998Z"
			/>
		</svg>
	);
};
