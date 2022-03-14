import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgAsterisk = ({
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
					d="M10.8501 14L11.2501 22.9999H12.7501L13.1501 14L21.175 18.1499L21.9 16.8499L14.3251 12L21.9 7.14998L21.175 5.82498L13.1501 9.99997L12.7501 1H11.2501L10.8501 9.97497L2.8751 5.82498L2.1001 7.14998L9.72507 12L2.1001 16.8499L2.8751 18.1499L10.8501 14Z"
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
