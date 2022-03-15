import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgEye = ({
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
				d="M15 7.89999C19.8749 7.89999 25.9999 14.375 25.9999 14.375V15.55C25.9999 15.55 19.8749 22.0249 15 22.0249C10.125 22.0249 4 15.55 4 15.55V14.375C4 14.375 10.125 7.89999 15 7.89999ZM15 19.675C17.6 19.675 19.7249 17.575 19.7249 14.975C19.7249 12.35 17.6 10.25 15 10.25C12.4 10.25 10.275 12.35 10.275 14.975C10.275 17.575 12.4 19.675 15 19.675ZM15 13.4C15 14.25 15.7 14.975 16.575 14.975H17.35C17.35 16.275 16.3 17.325 15 17.325C13.7 17.325 12.65 16.275 12.65 14.975C12.65 13.65 13.7 12.6 15 12.6V13.4Z"
			/>
		</svg>
		{isAnnouncedByScreenReader ? (
			<span
				css={css`
					${visuallyHidden}
				`}
			>
				View
			</span>
		) : (
			''
		)}
	</>
);
