import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../../@types/Icons';

const Svg = ({ size }: IconProps): EmotionJSX.Element => (
	<svg
		width={size ? iconSize[size] : undefined}
		height={undefined}
		viewBox="-3 -3 30 30"
		xmlns="http://www.w3.org/2000/svg"
		focusable={false}
		aria-hidden={true}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="m23 6.57-1.833-1.81H2.833L1 6.57v1.664h22V6.569Zm0 3.69H1v7.164l1.803 1.81h18.364L23 17.424V10.26Zm-17.368 5.5h2.29v-1.158h-2.29v1.158Zm5.772 0h-2.29v-1.158h2.29v1.158Zm1.192 0h2.29v-1.158h-2.29v1.158Zm5.772 0h-2.29v-1.158h2.29v1.158Z"
		/>
	</svg>
);

export const SvgCreditCard = ({
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
				Credit card
			</span>
		) : (
			''
		)}
	</>
);
