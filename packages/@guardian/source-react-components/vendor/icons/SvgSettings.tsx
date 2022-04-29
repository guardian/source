// DO NOT EDIT
// this file is auto-generated by scripts/fetch-icons.ts
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
			d="M20.705 14.195c-.174.823-.548 1.646-.923 2.345l1.173 1.895a12.866 12.866 0 0 1-2.47 2.47l-1.895-1.223c-.774.425-1.522.749-2.345 1.023l-.474 2.12c-.574.1-1.123.175-1.746.175a9.86 9.86 0 0 1-1.746-.175l-.474-2.17c-.823-.224-1.646-.548-2.345-.973l-1.895 1.223c-.923-.699-1.796-1.547-2.47-2.47l1.222-1.92c-.424-.674-.748-1.497-.972-2.32l-2.17-.474A9.863 9.863 0 0 1 1 11.975c0-.623.075-1.172.175-1.746l2.17-.474c.224-.823.548-1.596.972-2.345L3.095 5.515a12.863 12.863 0 0 1 2.47-2.47L7.46 4.218c.699-.374 1.522-.749 2.345-.923l.474-2.22C10.803 1 11.45 1 12.025 1c.574 0 1.172.025 1.746.075l.474 2.22c.823.174 1.571.549 2.345.923l1.895-1.173a14.456 14.456 0 0 1 2.47 2.47L19.782 7.41c.375.724.749 1.522.923 2.345l2.22.474a20.432 20.432 0 0 1 0 3.492l-2.22.474Zm-8.68 4.839c3.891 0 7.059-3.168 7.059-7.059s-3.168-7.059-7.06-7.059c-3.89 0-7.058 3.168-7.058 7.06 0 3.89 3.168 7.058 7.059 7.058Z"
		/>
	</svg>
);

export const SvgSettings = ({
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
				Settings
			</span>
		) : (
			''
		)}
	</>
);
