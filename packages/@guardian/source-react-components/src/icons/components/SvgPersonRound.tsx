import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgPersonRound = ({
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
					d="M18.2365 18.7183C16.6005 20.2376 14.4087 21.1667 12 21.1667C9.59013 21.1667 7.39746 20.2367 5.76125 18.7161L6.94939 14.0692L7.68632 13.3102C9.12423 12.8104 10.4183 12.5882 12 12.5882C13.5638 12.5882 14.8759 12.8474 16.3138 13.3102L17.0327 14.0692L18.2365 18.7183ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11.9909 11.4118C13.3455 11.4118 14.9414 9.70934 14.9414 7.63322C14.9414 5.55709 13.8466 4.35294 11.9909 4.35294C10.1353 4.35294 9.05902 5.55709 9.05902 7.63322C9.05902 9.70934 10.7848 11.4118 11.9909 11.4118Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				></span>
			) : (
				''
			)}
		</>
	);
};
