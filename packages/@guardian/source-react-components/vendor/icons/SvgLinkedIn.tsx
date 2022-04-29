// DO NOT EDIT
// this file is auto-generated by scripts/fetch-icons.ts
import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../../src/@types/Icons';

const Svg = ({ size }: IconProps): EmotionJSX.Element => (
	<svg
		width={size ? iconSize[size] : undefined}
		height={undefined}
		viewBox="-3 -3 30 30"
		xmlns="http://www.w3.org/2000/svg"
		focusable={false}
		aria-hidden={true}
	>
		<path d="M7.075 3.952c0 1.085-.785 1.95-2.08 1.95C3.786 5.902 3 5.037 3 3.952 3 2.843 3.81 2 5.05 2c1.242 0 2 .843 2.025 1.952ZM3.101 19.997V7.442H6.95v12.555H3.1ZM9.25 11.447c0-1.565-.05-2.868-.1-4.005h3.34l.179 1.746h.076c.5-.821 1.747-2.024 3.826-2.024 2.531 0 4.43 1.72 4.43 5.417v7.422H17.15V13.04c0-1.618-.558-2.721-1.95-2.721-1.063 0-1.696.743-1.974 1.462-.1.316-.143.646-.128.977v7.239H9.25v-8.55Z" />
	</svg>
);

export const SvgLinkedIn = ({
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
				LinkedIn logo
			</span>
		) : (
			''
		)}
	</>
);
