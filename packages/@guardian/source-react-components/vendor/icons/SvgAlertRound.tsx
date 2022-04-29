// DO NOT EDIT
// this file is auto-generated by packages/@guardian/source-react-components/scripts/create-icons/index.ts
import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../../src/@types/Icons';

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
			d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-10.704 1.818h1.386l.659-8.636-.91-.91h-.885l-.91.91.66 8.636Zm2.068 3.637c0-.75-.614-1.364-1.364-1.364-.75 0-1.364.614-1.364 1.364 0 .75.614 1.363 1.364 1.363.75 0 1.364-.613 1.364-1.363Z"
		/>
	</svg>
);


		export const SvgAlertRound = ({
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
						Warning
					</span>
				) : (
					''
				)}
			</>
		);