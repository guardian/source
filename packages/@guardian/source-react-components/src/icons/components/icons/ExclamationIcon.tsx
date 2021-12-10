import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const ExclamationIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.4068 2.05085L10.3899 14.8983H13.1017L14.1187 2.05085L13.1356 1H10.3899L9.4068 2.05085ZM14.4237 20.322C14.4237 18.8305 13.2034 17.6102 11.678 17.6102C10.2203 17.6102 9 18.8305 9 20.322C9 21.7797 10.2203 23 11.678 23C13.1695 23 14.4237 21.7797 14.4237 20.322Z"
			/>
		</svg>
	);
};