import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgCreditCard = ({
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
					d="M23 6.56921L21.1666 4.76H2.83333L1 6.56921V8.23369H23V6.56921ZM23 10.26H1L1 17.4244L2.80277 19.2337H21.1666L23 17.4244L23 10.26ZM5.63158 15.76H7.92236V14.6021H5.63158V15.76ZM11.4044 15.76H9.1136V14.6021H11.4044V15.76ZM12.5956 15.76H14.8864V14.6021H12.5956V15.76ZM18.3684 15.76H16.0776V14.6021H18.3684V15.76Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				></span>
			) : (
				''
			)}
		</>
	);
};
