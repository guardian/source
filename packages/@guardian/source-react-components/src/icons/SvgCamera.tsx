import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgCamera = ({
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
				d="M25.9999 9.99999V20.9749L24.5249 22.5249H5.49999L4 21.0499V9.99999L5.49999 8.49999H10.475L12.975 6H17L19.4999 8.49999H24.5249L25.9999 9.99999ZM15 19.75C17.5 19.75 19.5249 17.75 19.5249 15.275C19.5249 12.775 17.5 10.775 15 10.775C12.5 10.775 10.5 12.775 10.5 15.275C10.5 17.75 12.5 19.75 15 19.75Z"
			/>
		</svg>
		{isAnnouncedByScreenReader ? (
			<span
				css={css`
					${visuallyHidden}
				`}
			>
				Camera
			</span>
		) : (
			''
		)}
	</>
);
