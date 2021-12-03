import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const CrossRoundIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.1383 7.64241L16.3564 6.86168L12.0072 10.8436L7.64335 6.87694L6.86145 7.65767L10.8492 12L6.86145 16.3423L7.64335 17.1231L12.0072 13.1564L16.3564 17.1383L17.1383 16.3576L13.1654 12L17.1383 7.64241Z"
			/>
		</svg>
	);
};
