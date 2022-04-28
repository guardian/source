import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../../@types/Icons';

const Svg = ({ size }: IconProps): EmotionJSX.Element => (
	<svg
		width={size ? iconSize[size] : undefined}
		height={undefined}
		viewBox="-3 -3 30 30"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		focusable={false}
		aria-hidden={true}
	>
		<path
			d="M18.108 7.573a9.964 9.964 0 0 1-.058.328c-.737 3.789-3.262 5.097-6.486 5.097H9.923a.797.797 0 0 0-.788.676l-.84 5.33-.239 1.51a.42.42 0 0 0 .415.486h2.911a.7.7 0 0 0 .692-.59l.029-.148.548-3.48.035-.19a.7.7 0 0 1 .692-.592h.436c2.82 0 5.029-1.145 5.674-4.459.27-1.384.13-2.54-.583-3.353a2.783 2.783 0 0 0-.797-.615Z"
			fill="#A7B4C8"
		/>
		<path
			d="M17.336 7.265a5.837 5.837 0 0 0-.718-.159 9.116 9.116 0 0 0-1.447-.105h-4.385a.697.697 0 0 0-.691.591l-.933 5.91-.027.171a.797.797 0 0 1 .788-.675h1.641c3.224 0 5.748-1.309 6.486-5.097.022-.112.04-.221.058-.328a3.933 3.933 0 0 0-.772-.308Z"
			fill="#041F4A"
		/>
		<path
			d="M10.095 7.592a.697.697 0 0 1 .69-.59h4.386c.52 0 1.005.033 1.447.105a5.807 5.807 0 0 1 .883.21c.218.073.42.158.607.256.22-1.4-.002-2.353-.759-3.216C16.515 3.407 15.01 3 13.082 3H7.487a.8.8 0 0 0-.79.676L4.365 18.448a.48.48 0 0 0 .474.556h3.454l.868-5.503.932-5.909Z"
			fill="#052962"
		/>
	</svg>
);

export const SvgPayPalBrand = ({
	size,
	isAnnouncedByScreenReader = false,
}: IconProps): EmotionJSX.Element => (
	<>
		<Svg size={size} />
		{isAnnouncedByScreenReader ? (
			<span
				css={css`
					${visuallyHidden}
				`}
			>
				PayPal logo
			</span>
		) : (
			''
		)}
	</>
);
