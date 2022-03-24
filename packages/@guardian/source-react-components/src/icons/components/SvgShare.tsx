import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgShare = ({
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
					d="M18.9999 16C20.6749 16 21.9999 17.3499 21.9999 18.9999C21.9999 20.6749 20.6749 21.9999 18.9999 21.9999C17.3499 21.9999 16.025 20.6749 16.025 18.9999C16.025 18.8749 16.025 18.7249 16.05 18.6249L7.09998 14.15C6.52498 14.7 5.82499 14.975 5.02499 14.975C3.325 14.975 2 13.65 2 12C2 10.325 3.325 8.97498 5.02499 8.97498C5.79999 8.97498 6.52498 9.32498 7.09998 9.84997L16.05 5.37499C16.025 5.27499 16.025 5.14999 16.025 4.97499C16.025 3.325 17.3499 2 18.9999 2C20.6749 2 21.9999 3.325 21.9999 4.97499C21.9999 6.64998 20.6749 7.99998 18.9999 7.99998C18.1999 7.99998 17.5249 7.67498 16.9499 7.17498L7.97498 11.625C7.99998 11.7 7.99998 11.825 7.99998 12C7.99998 12.175 7.99998 12.3 7.97498 12.375L16.9499 16.8249C17.5249 16.325 18.1999 16 18.9999 16ZM18.9999 3.2C18.0249 3.2 17.1999 3.97499 17.1999 4.97499C17.1999 5.97499 18.0249 6.79998 18.9999 6.79998C19.9999 6.79998 20.8249 5.97499 20.8249 4.97499C20.8249 3.97499 19.9999 3.2 18.9999 3.2ZM18.9999 20.7999C19.9999 20.7999 20.8249 19.9749 20.8249 18.9999C20.8249 17.9999 19.9999 17.1999 18.9999 17.1999C18.0249 17.1999 17.1999 17.9999 17.1999 18.9999C17.1999 19.9749 18.0249 20.7999 18.9999 20.7999Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Share
				</span>
			) : (
				''
			)}
		</>
	);
};
