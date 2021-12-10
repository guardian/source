import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const ArrowPopOutIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M22.9999 2.975L22.5249 2.5H15.25V3.75L19.7249 4.32499L14 10.075L15.4 11.5L21.1499 5.72499L21.7499 10.25H22.9999V2.975ZM11 8.49998V6.49999H1V8.49998H11ZM8.99997 12.5V10.5H1V12.5H8.99997ZM15 16.5V14.5H1V16.5H15ZM11 20.4999V18.4999H1V20.4999H11Z"
			/>
		</svg>
	);
};