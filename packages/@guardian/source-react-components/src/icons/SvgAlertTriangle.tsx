import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgAlertTriangle = ({
	size,
	isAnnouncedByScreenReader = false,
}: IconProps): EmotionJSX.Element => (
	<>
		<svg
			viewBox="0 0 30 30"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.41 5L4 22.057l.668.943h20.664l.668-.943L15.59 5h-1.18zm-.063 12.178h1.306l.621-6.917-.856-.728h-.835l-.857.728.62 6.917zM15 18.452c.7 0 1.274.573 1.274 1.274 0 .7-.573 1.274-1.274 1.274-.7 0-1.274-.573-1.274-1.274 0-.7.573-1.274 1.274-1.274z"
			/>
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
