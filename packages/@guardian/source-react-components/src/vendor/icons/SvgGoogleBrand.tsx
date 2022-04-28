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
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3.545 7.648c.395-.87.954-1.629 1.61-2.316 1.483-1.554 3.278-2.55 5.404-2.889 2.974-.475 5.637.226 7.938 2.207.145.126.18.199.023.354-.812.795-1.611 1.603-2.415 2.407-.083.082-.139.183-.285.048-2.026-1.856-5.332-1.834-7.485.167a6.183 6.183 0 0 0-1.608 2.455c-.05-.033-.103-.062-.15-.098L3.545 7.648Z"
			fill="#D7282A"
		/>
		<mask
			id="prefix__a"
			style={{
				maskType: 'alpha',
			}}
			maskUnits="userSpaceOnUse"
			x={3}
			y={13}
			width={16}
			height={9}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.537 13.872h15.078v7.819H3.537v-7.82Z"
				fill="#fff"
			/>
		</mask>
		<g mask="url(#prefix__a)">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.703 13.872c.29.737.651 1.435 1.187 2.027 1.364 1.506 3.054 2.156 5.08 1.945.94-.097 1.798-.416 2.599-.906.077.069.15.142.23.206.938.732 1.877 1.462 2.816 2.193a8.059 8.059 0 0 1-3.631 1.984c-3.24.82-6.228.302-8.88-1.792a9.002 9.002 0 0 1-2.567-3.199l3.166-2.458Z"
				fill="#45AC43"
			/>
		</g>
		<mask
			id="prefix__b"
			style={{
				maskType: 'alpha',
			}}
			maskUnits="userSpaceOnUse"
			x={12}
			y={10}
			width={10}
			height={10}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.172 10.164H21.5v9.173h-9.328v-9.173Z"
				fill="#fff"
			/>
		</mask>
		<g mask="url(#prefix__b)">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18.614 19.337c-.938-.731-1.877-1.461-2.814-2.193-.081-.064-.154-.137-.231-.206.635-.485 1.165-1.058 1.514-1.787.138-.29.236-.594.328-.902.064-.212.044-.294-.218-.292-1.562.013-3.124.007-4.686.006-.33 0-.33 0-.33-.342 0-1.058.004-2.117-.005-3.176-.002-.204.034-.282.264-.281 2.88.008 5.761.006 8.642.002.155 0 .253.011.28.2.359 2.52.071 4.928-1.247 7.151-.404.68-.89 1.303-1.497 1.82Z"
				fill="#5D7FBE"
			/>
		</g>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M6.703 13.872 3.537 16.33c-.515-.958-.813-1.987-.951-3.06a9.58 9.58 0 0 1 .811-5.349c.044-.094.099-.182.148-.273 1.01.778 2.02 1.557 3.032 2.335.047.036.1.065.15.098-.423 1.261-.402 2.525-.024 3.79Z"
			fill="#F4C300"
		/>
	</svg>
);

export const SvgGoogleBrand = ({
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
				Google logo
			</span>
		) : (
			''
		)}
	</>
);
