import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgEnvelope = ({
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
				<path d="M2.57143 4L1 5.69853L10.9524 13.625H13.0476L23 5.69853L21.4286 4H2.57143Z"></path>
				<path d="M1 17.625V8.125L10.9524 15.125H13.0476L23 8.125V17.625L21.4286 19.125H2.57143L1 17.625Z"></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Email,
				</span>
			) : (
				''
			)}
		</>
	);
};
