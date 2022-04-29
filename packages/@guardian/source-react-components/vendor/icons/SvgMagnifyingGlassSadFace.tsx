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
			d="M9.273 2c1 0 1.954.182 2.84.568.887.387 1.637.91 2.296 1.568.66.66 1.16 1.432 1.545 2.319a6.94 6.94 0 0 1 .569 2.818c0 1-.182 1.931-.569 2.818-.386.886-.886 1.659-1.545 2.318-.659.66-1.409 1.16-2.295 1.545-.887.387-1.841.569-2.841.569-1 0-1.932-.182-2.818-.569-.887-.386-1.66-.886-2.319-1.545a7.457 7.457 0 0 1-1.568-2.318A6.942 6.942 0 0 1 2 9.273c0-1 .182-1.932.568-2.818.387-.887.91-1.66 1.568-2.319a7.457 7.457 0 0 1 2.319-1.568A6.942 6.942 0 0 1 9.273 2Zm0 1.84c-.75 0-1.455.137-2.114.41-.659.295-1.25.682-1.727 1.16-.5.5-.887 1.067-1.16 1.726a5.205 5.205 0 0 0-.431 2.137 5.1 5.1 0 0 0 .432 2.113c.272.66.659 1.228 1.159 1.728S6.5 14 7.159 14.295a5.1 5.1 0 0 0 2.114.432 5.1 5.1 0 0 0 2.113-.431 5.798 5.798 0 0 0 1.75-1.182 5.76 5.76 0 0 0 1.16-1.728c.295-.659.431-1.363.431-2.113s-.136-1.478-.432-2.137C14 6.477 13.636 5.91 13.136 5.41s-1.09-.864-1.75-1.159a5.473 5.473 0 0 0-2.113-.41Zm-.546 3.796c0 .5-.409.91-.909.91s-.909-.41-.909-.91c0-.522.41-.909.91-.909s.908.387.908.91Zm2.91 0c0 .5-.41.91-.91.91s-.909-.41-.909-.91c0-.522.41-.909.91-.909s.908.387.908.91ZM9.272 11.25c-1 0-1.91.273-2.682.818l-.41-.432a5.013 5.013 0 0 1 1.387-.954c.523-.228 1.091-.318 1.705-.318.613 0 1.181.09 1.704.318.523.25 1 .568 1.387.954l-.41.432c-.772-.545-1.659-.818-2.681-.818Zm5.454 5.318v-.932l.91-.909h.931L22 20.16 20.16 22l-5.433-5.432Z"
		/>
	</svg>
);


		export const SvgMagnifyingGlassSadFace = ({
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
						No results
					</span>
				) : (
					''
				)}
			</>
		);