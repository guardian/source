import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const TextSmallIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.345 17.69L14.82 17.365L13.82 14.265H9.49498L8.44499 17.365L9.96998 17.69V18.465H5.87V17.69L7.16999 17.365L11.295 5.54001H12.845L16.845 17.365L18.12 17.69V18.465H13.345V17.69ZM9.81998 13.315H13.52L11.77 7.865H11.67L9.81998 13.315Z"
			/>
		</svg>
	);
};
