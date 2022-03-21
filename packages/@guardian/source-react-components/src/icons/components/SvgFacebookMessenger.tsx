import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgFacebookMessenger = ({
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
					d="M8.84848 20.0606C9.84848 20.3636 10.9091 20.5152 12 20.5152C17.5152 20.5152 22 16.3636 22 11.2727C22 6.15152 17.5152 2 12 2C6.48485 2 2 6.15152 2 11.2727C2 13.8788 3.18182 16.2424 5.06061 17.9091V22L8.84848 20.0606ZM10.4848 11.7576L13.0606 14.4242L18.5151 8.69697L13.5454 11.4242L10.9697 8.75757L5.51513 14.4848L10.4848 11.7576Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Facebook Messenger logo
				</span>
			) : (
				''
			)}
		</>
	);
};
