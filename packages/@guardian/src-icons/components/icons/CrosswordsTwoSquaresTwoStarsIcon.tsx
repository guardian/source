import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const CrosswordsTwoSquaresTwoStarsIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1 6L1.475 5.5H20.9999V6.99999H13.5V17H20.9999V18.5H1.475L1 18V6ZM12 17V6.99999H2.49999V17H12ZM9.42497 14.825L9.14997 15.025L7.22498 13.6L5.29999 15.025L5.02499 14.825L5.77498 12.55L3.84999 11.15L3.94999 10.825H6.32498L7.04998 8.54999H7.39998L8.12498 10.825H10.525L10.6 11.15L8.67497 12.55L9.42497 14.825ZM20.2999 14.825L20.0499 15.025L18.0999 13.6L16.1749 15.025L15.9249 14.825L16.6499 12.55L14.725 11.15L14.85 10.825H17.2249L17.9749 8.54999H18.2749L19.0249 10.825H21.3999L21.4999 11.15L19.5499 12.55L20.2999 14.825Z"
			/>
		</svg>
	);
};
