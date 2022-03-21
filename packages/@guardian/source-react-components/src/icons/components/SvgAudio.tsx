import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgAudio = ({
	size,
	isAnnouncedByScreenReader = false,
}: IconProps): EmotionJSX.Element => {
	return (
		<>
			<svg
				viewBox="-3 -3 30 30"
				xmlns="http://www.w3.org/2000/svg"
				width={size ? iconSize[size] : undefined}
				aria-hidden={true}
				focusable={false}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2 15.75H5.74998L11 20.9999H12V3H11L5.74998 8.24998H2L1 9.24998V14.75L2 15.75ZM21.3 12C21.3 14.7 20.375 17.175 18.8 19.175L19.35 19.7C21.575 17.875 23 15.125 23 12C23 8.87501 21.575 6.10002 19.35 4.27502L18.8 4.80002C20.375 6.80002 21.3 9.27501 21.3 12ZM16.0999 12C16.0999 13.575 15.675 14.975 14.825 16.2L15.475 16.85C16.7499 15.575 17.4999 13.9 17.4999 12C17.4999 10.075 16.7499 8.39998 15.475 7.12499L14.825 7.77498C15.675 8.99998 16.0999 10.425 16.0999 12Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Audio
				</span>
			) : (
				''
			)}
		</>
	);
};
