import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgPerson = ({
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
					d="M15.975 4.94999C15.975 7.44998 13.825 9.49997 12 9.49997C10.375 9.49997 8.04998 7.44998 8.04998 4.94999C8.04998 2.45 9.49998 1 12 1C14.5 1 15.975 2.45 15.975 4.94999ZM4.975 13.3571L6.00001 12.3029C8.00001 11.6086 9.80001 11.3 12 11.3C14.175 11.3 16 11.66 18 12.3029L19 13.3571L21 21.0714L19.975 22.1H3.975L3 21.0714L4.975 13.3571Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					profile,
				</span>
			) : (
				''
			)}
		</>
	);
};