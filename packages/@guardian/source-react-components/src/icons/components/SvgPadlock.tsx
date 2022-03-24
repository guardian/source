import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgPadlock = ({
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
					d="M7.75317 6.95746C7.75317 4.60731 9.65835 2.70213 12.0085 2.70213C14.3587 2.70213 16.2638 4.60731 16.2638 6.95746H17.966C17.966 3.66725 15.2987 1 12.0085 1C8.71828 1 6.05104 3.66725 6.05104 6.95746H7.75317ZM6.05101 6.95748L6.05101 9.08514L5.19995 9.9362V20.149L6.05101 21H17.9659L18.817 20.149V9.9362L17.9659 9.08517V6.95748H16.2638V9.08514H7.75315V6.95748H6.05101ZM13.285 13.766C13.285 14.3218 12.9298 14.7947 12.434 14.9699V16.7447H11.5829V14.97C11.0871 14.7947 10.7318 14.3218 10.7318 13.766C10.7318 13.0609 11.3034 12.4894 12.0084 12.4894C12.7135 12.4894 13.285 13.0609 13.285 13.766Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Lock
				</span>
			) : (
				''
			)}
		</>
	);
};
