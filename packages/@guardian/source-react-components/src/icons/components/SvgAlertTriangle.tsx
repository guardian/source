import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgAlertTriangle = ({
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
					d="M11.4107 2L1 19.0571L1.66786 20H22.3321L23 19.0571L12.5893 2H11.4107ZM11.3469 14.1778H12.6531L13.2741 7.26137L12.4176 6.53332H11.5825L10.726 7.26137L11.3469 14.1778ZM12 15.4519C12.7008 15.4519 13.2741 16.0252 13.2741 16.7259C13.2741 17.4267 12.7008 18 12 18C11.2993 18 10.726 17.4267 10.726 16.7259C10.726 16.0252 11.2993 15.4519 12 15.4519Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Warning
				</span>
			) : (
				''
			)}
		</>
	);
};
