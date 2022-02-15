import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgArrowCircleClockwise = ({
	size,
}: IconProps): EmotionJSX.Element => (
	<svg
		// Really this is 24×24, hence the offset
		viewBox="-3 -3 30 30"
		width={size ? iconSize[size] : '24'}
		height={size ? iconSize[size] : '24'}
	>
		<path d="M11.588 1a10.928 10.928 0 0 0-9.046 4.786l.126.676.877.527.676-.176C5.85 4.508 8.506 2.98 11.588 2.98c4.936 0 8.995 4.059 8.995 9.045 0 4.961-4.059 8.995-8.995 8.995-2.832 0-5.262-1.252-6.94-3.257l3.632-.601v-1.253H1.866l-.476.476V23h1.227l.627-3.784C5.248 21.546 8.205 23 11.588 23c6.089 0 11.025-4.911 11.025-10.975A11.01 11.01 0 0 0 11.588 1Z" />
	</svg>
);
