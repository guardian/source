import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const UploadIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.4749 6.12498L16.5749 6.99998L13 4.27499V13H11V4.27499L7.42498 6.99998L6.54998 6.12498L11.65 1H12.35L17.4749 6.12498ZM21.9999 9.99997H22.9999V19.9749L21.9749 20.9999H1.975L1 19.9749V9.99997H2L2.99999 11V18.9999H20.9999V11L21.9999 9.99997Z"
			/>
		</svg>
	);
};
