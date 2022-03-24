import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgPersonPlus = ({
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
					d="M9.99997 9.49997C11.825 9.49997 13.975 7.44998 13.975 4.94999C13.975 2.45 12.5 1 9.99997 1C7.49998 1 6.04998 2.45 6.04998 4.94999C6.04998 7.44998 8.37497 9.49997 9.99997 9.49997ZM19.7499 15H18.2499V11.75H15V10.25H18.2499V6.99998H19.7499V10.25H22.9999V11.75H19.7499V15ZM9.99997 11.5C11.075 11.5 12.1 11.575 13.025 11.75C13.3 14.35 15.35 16.4499 17.8999 16.8999L18.9999 20.9999L17.9749 21.9999H1.975L1 20.9999L2.97499 13.5L3.99999 12.475C5.99998 11.8 7.79998 11.5 9.99997 11.5Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Add user
				</span>
			) : (
				''
			)}
		</>
	);
};
