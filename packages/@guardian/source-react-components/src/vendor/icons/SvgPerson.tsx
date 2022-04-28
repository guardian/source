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
			d="M15.975 4.95c0 2.5-2.15 4.55-3.975 4.55-1.625 0-3.95-2.05-3.95-4.55S9.5 1 12 1s3.975 1.45 3.975 3.95Zm-11 8.407L6 12.303c2-.694 3.8-1.003 6-1.003 2.175 0 4 .36 6 1.003l1 1.054 2 7.714-1.025 1.029h-16L3 21.071l1.975-7.714Z"
		/>
	</svg>
);

export const SvgPerson = ({
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
				Account
			</span>
		) : (
			''
		)}
	</>
);
