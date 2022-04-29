import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { visuallyHidden } from '@guardian/source-foundations';

export type SvgRoundelProps = {
	/**
	 * The text colour.
	 *
	 * This should probably come from
	 * [`@guardian/src-foundation`](https://theguardian.design/2a1e5182b/p/2668c8-code).
	 */
	textColor?: string;
	/**
	 * The roundel's background colour.
	 *
	 * This should probably come from
	 * [`@guardian/src-foundation`](https://theguardian.design/2a1e5182b/p/2668c8-code).
	 */
	backgroundColor?: string;
	/**
	 * The width the SVG will display at (height is automatically adjusted
	 * to maintain the correct aspect ratio).
	 */
	width?: number;
};

/**
 * @package This component is used to construct the public components.
 * It's not for public consumption – do not export or document.
 */

export const SvgRoundel = ({
	textColor = '#fff',
	backgroundColor: bgColor = '#000',
	width,
}: SvgRoundelProps): EmotionJSX.Element => {
	return (
		<>
			<svg
				viewBox="0 0 42 42"
				xmlns="http://www.w3.org/2000/svg"
				width={width}
				focusable={false}
				aria-hidden={true}
			>
				<circle cx="21" cy="21" r="21" fill={bgColor} />
				<path
					d="M33.7 22.15l-2.16.96v9.94a17.44 17.44 0 01-7.27 3.58V22.9l-2.3-.81v-.6H33.7v.66z
				M22.95 5.6h-.06c-4.86 0-7.64 6.55-7.5 15.38-.14 8.87 2.64 15.43 7.5 15.43h.06v.68c-7.28.48-17.23-4.94-17.09-16.07-.14-11.17 9.8-16.6 17.1-16.1v.68zm1.47-.72c2.85.44 6.1 2.31 7.32 3.64v6.13h-.7l-6.62-9.09v-.68z"
					fill={textColor}
				/>
			</svg>
			<span
				css={css`
					${visuallyHidden}
				`}
			>
				The Guardian
			</span>
		</>
	);
};
