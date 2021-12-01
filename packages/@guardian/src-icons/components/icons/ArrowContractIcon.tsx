import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const ArrowContractIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.975 2.275V9.52497L14.45 9.99997H21.7249V8.74997L17.2249 8.14998L22.9749 2.425L21.5499 1L15.8249 6.77498L15.225 2.275H13.975ZM9.97497 21.7249V14.475L9.49997 14H2.25V15.25L6.72498 15.8249L1 21.5749L2.4 22.9999L8.14998 17.2249L8.72497 21.7249H9.97497Z"
			/>
		</svg>
	);
};
