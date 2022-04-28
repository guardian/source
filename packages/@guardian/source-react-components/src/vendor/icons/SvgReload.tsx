import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../../@types/Icons';

const Svg = ({ size }: IconProps): EmotionJSX.Element => (
	<svg
		width={size ? iconSize[size] : undefined}
		height={undefined}
		viewBox="-3 -3 30 30"
		xmlns="http://www.w3.org/2000/svg"
		focusable={false}
		aria-hidden={true}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.588 1a10.928 10.928 0 0 0-9.045 4.786l.125.676.877.527.677-.176C5.85 4.508 8.506 2.98 11.588 2.98c4.937 0 8.996 4.059 8.996 9.045 0 4.961-4.06 8.995-8.996 8.995-2.831 0-5.262-1.252-6.94-3.257l3.633-.601v-1.253H1.866l-.476.476V23h1.228l.626-3.784C5.25 21.546 8.206 23 11.588 23c6.09 0 11.025-4.911 11.025-10.975A11.01 11.01 0 0 0 11.588 1Z"
		/>
	</svg>
);

export const SvgReload = ({
	size,
	isAnnouncedByScreenReader = false,
}: IconProps): EmotionJSX.Element => (
	<>
		<Svg size={size} />
		{isAnnouncedByScreenReader ? (
			<span
				css={css`
					${visuallyHidden}
				`}
			>
				Reload
			</span>
		) : (
			''
		)}
	</>
);
