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
		<path d="M18.324 13.99a7.11 7.11 0 0 0-3.604-3.456l-.59-6.87A6.99 6.99 0 0 0 16.89 2H7.114a6.845 6.845 0 0 0 2.76 1.665l-.569 6.87A7.073 7.073 0 0 0 5.68 13.99H11.01v6.006l.99 4.004.991-4.004V13.99h5.332Z" />
	</svg>
);

export const SvgPinned = ({
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
				Pinned
			</span>
		) : (
			''
		)}
	</>
);
