import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgEyeStrike = ({
	size,
	isAnnouncedByScreenReader = false,
}: IconProps): EmotionJSX.Element => (
	<>
		<svg
			viewBox="0 0 30 30"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
			aria-hidden={true}
			focusable={false}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.3349 8.42028C16.5448 8.15628 15.7573 8 14.9999 8C10.125 8 3.99998 14.475 3.99998 14.475L3.99998 15.65C3.99998 15.65 5.31801 17.0433 7.21787 18.5373L10.2909 15.4642C10.2804 15.3359 10.275 15.2061 10.275 15.075C10.275 12.45 12.3999 10.35 14.9999 10.35C15.131 10.35 15.2609 10.3553 15.3894 10.3658L17.3349 8.42028ZM12.7684 15.8152L15.0021 13.5815C15.0023 13.5862 15.0026 13.5908 15.0029 13.5954L12.7721 15.8262C12.7709 15.8225 12.7696 15.8189 12.7684 15.8152ZM11.0029 17.5807L8.85165 19.732C8.85458 19.7339 8.85751 19.7359 8.86044 19.7379L11.0086 17.5897C11.0067 17.5867 11.0048 17.5837 11.0029 17.5807ZM14.5057 19.7494L12.5795 21.6757C13.3982 21.9572 14.2153 22.125 14.9999 22.125C19.8749 22.125 25.9999 15.65 25.9999 15.65L25.9999 14.475C25.9999 14.475 24.6521 13.0502 22.7178 11.5373L19.6971 14.558C19.7155 14.7277 19.7249 14.9002 19.7249 15.075C19.7249 17.675 17.5999 19.775 14.9999 19.775C14.8331 19.775 14.6682 19.7663 14.5057 19.7494ZM21.0798 10.347L18.9495 12.4773L21.0798 10.347C19.3075 9.28098 19.3107 9.28268 19.3139 9.28438L17.5122 11.0714C17.5182 11.0752 17.5152 11.0733 17.5122 11.0714L17.5212 11.0771"
			/>
			<rect
				x="23.4942"
				y="5.10417"
				width="2"
				height="26"
				transform="rotate(45 23.4942 5.10417)"
			/>
		</svg>
		{isAnnouncedByScreenReader ? (
			<span
				css={css`
					${visuallyHidden}
				`}
			>
				Not visible
			</span>
		) : (
			''
		)}
	</>
);
