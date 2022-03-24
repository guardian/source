import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgAudioMute = ({
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
					d="M2 15.75H5.74998L11 20.9999H12V3H11L5.74998 8.24998H2L1 9.24998V14.75L2 15.75ZM17.2799 12L13.8799 15.85L14.6049 16.575L18.4299 13.15L22.2799 16.575L23.0049 15.85L19.5799 12L23.0049 8.14999L22.2799 7.42499L18.4299 10.85L14.6049 7.42499L13.8799 8.14999L17.2799 12Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Sound off
				</span>
			) : (
				''
			)}
		</>
	);
};
