import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const EnvelopeIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path d="M2.57143 4L1 5.69853L10.9524 13.625H13.0476L23 5.69853L21.4286 4H2.57143Z" />
			<path d="M1 17.625V8.125L10.9524 15.125H13.0476L23 8.125V17.625L21.4286 19.125H2.57143L1 17.625Z" />
		</svg>
	);
};