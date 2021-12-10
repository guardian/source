import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const AsteriskIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.8499 14L11.2499 22.9999H12.7499L13.1499 14L21.1749 18.1499L21.8999 16.8499L14.3249 12L21.8999 7.14998L21.1749 5.82498L13.1499 9.99997L12.7499 1H11.2499L10.8499 9.97497L2.87497 5.82498L2.09998 7.14998L9.72495 12L2.09998 16.8499L2.87497 18.1499L10.8499 14Z"
			/>
		</svg>
	);
};