import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgPhone = ({
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
					d="M16.4878 1L18 2.5122V21.4878L16.4878 22.9756L7.5122 23L6 21.4878V2.5122L7.5122 1H16.4878ZM12.0976 21.4878C12.6342 21.4878 13.0976 21.0488 13.0976 20.4878C13.0976 19.9268 12.6342 19.4878 12.0976 19.4878C11.5366 19.4878 11.0732 19.9268 11.0732 20.4878C11.0732 21.0488 11.5366 21.4878 12.0976 21.4878ZM16.0732 18.4878V4.4878H8.07318V18.4878H16.0732Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Mobile phone
				</span>
			) : (
				''
			)}
		</>
	);
};
