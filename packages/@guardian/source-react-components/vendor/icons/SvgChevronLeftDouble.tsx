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
			d="m11.259 2 .952.977L4.843 12l7.368 9.023-.952.977-9.499-9.499V11.5L11.259 2Zm10.025 0 .952.977L14.868 12l7.368 9.023-.952.977-9.499-9.499V11.5L21.284 2Z"
		/>
	</svg>
);


		export const SvgChevronLeftDouble = ({
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
						Double chevron left
					</span>
				) : (
					''
				)}
			</>
		);