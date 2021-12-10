import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const LinkdinIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path d="M7.07503 3.95183C7.07503 5.03656 6.28996 5.90198 4.99593 5.90198C3.78507 5.90198 3 5.03656 3 3.95183C3 2.84349 3.81002 2 5.05082 2C6.29163 2 7.05008 2.84349 7.07503 3.95183ZM3.10146 19.9967V7.44219H6.94862V19.9967H3.10146Z" />
			<path d="M9.25061 11.4471C9.25061 9.88156 9.20072 8.57922 9.15082 7.44219H12.4907L12.6687 9.18821H12.7452C13.2441 8.36666 14.4916 7.16384 16.5707 7.16384C19.1022 7.16384 21 8.88456 21 12.5807V20.0034H17.1495V13.0396C17.1495 11.4218 16.5923 10.3185 15.2002 10.3185C14.1373 10.3185 13.5036 11.0624 13.2259 11.7811C13.1266 12.0965 13.0833 12.4272 13.0978 12.7579V19.9967H9.25061V11.4471Z" />
		</svg>
	);
};