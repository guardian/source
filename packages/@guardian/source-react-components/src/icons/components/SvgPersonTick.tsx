import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgPersonTick = ({
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
					d="M10.3999 9.49997C12.2249 9.49997 14.3749 7.44998 14.3749 4.94999C14.3749 2.45 12.8999 1 10.3999 1C7.89988 1 6.44988 2.45 6.44988 4.94999C6.44988 7.44998 8.77488 9.49997 10.3999 9.49997ZM16.1499 11.5L17.2248 10.45L18.3248 11.575L21.5998 8.29997L22.6498 9.37497L18.3248 13.7L17.2748 12.625L16.1499 11.5ZM10.3999 11.5C11.4749 11.5 12.4999 11.575 13.4249 11.75C13.6999 14.35 15.7499 16.4499 18.2998 16.8999L19.3998 20.9999L18.3748 21.9999H2.3749L1.3999 20.9999L3.3749 13.5L4.39989 12.475C6.39989 11.8 8.19988 11.5 10.3999 11.5Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					person, tick, profile, success,
				</span>
			) : (
				''
			)}
		</>
	);
};
