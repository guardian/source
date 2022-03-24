import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgFilter = ({
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
					d="M1 8.99998V6.99999H4.99999V4.5L5.99998 3.5H8.49997L9.49997 4.5V6.99999H22.9999V8.99998H9.49997V11.5L8.49997 12.5H5.99998L4.99999 11.5V8.99998H1ZM7.99998 4.99999H6.49998V11H7.99998V4.99999ZM16.4999 17H1V15H16.4999V12.475L17.4749 11.5H19.9999L20.9999 12.5V15H22.9999V17H20.9999V19.4999L19.9999 20.4999H17.4749L16.4999 19.4999V17ZM19.4999 13H17.9999V18.9999H19.4999V13Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Filter
				</span>
			) : (
				''
			)}
		</>
	);
};
