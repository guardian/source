import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const DocumentIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.9999 20.9999L19.0249 21.9999H5L4 20.9999V3L5 2H16.025L19.9999 5.99999V20.9999ZM18 7.99998H5.99999V9.49997H18V7.99998ZM18 11H5.99999V12.5H18V11ZM13 14H5.99999V15.5H13V14Z"
			/>
		</svg>
	);
};
