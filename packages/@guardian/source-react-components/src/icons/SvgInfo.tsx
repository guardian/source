import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgInfo = ({
	size,
	isAnnouncedByScreenReader = false,
}: IconProps): EmotionJSX.Element => (
	<>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
			viewBox="0 0 30 30"
			aria-hidden={true}
			focusable={false}
		>
			<path d="M15 4C8.913 4 4 8.913 4 15s4.913 11 11 11 11-4.913 11-11S21.087 4 15 4zm1.247 15.327v.537c-.123.098-.294.172-.465.27-.17.073-.366.146-.562.22a2.573 2.573 0 01-.587.146c-.195.024-.39.049-.562.049-.391 0-.635-.073-.782-.22a.635.635 0 01-.245-.489c0-.196.025-.391.05-.587.024-.195.073-.39.122-.635l1.026-4.67-.953-.22v-.512c.147-.05.342-.123.611-.196.244-.073.513-.122.807-.171.293-.049.562-.098.83-.122.27-.025.514-.05.734-.05l.269.172-1.369 6.478h1.076zm.464-8.214c-.22.196-.538.294-.904.294-.343 0-.636-.098-.88-.294a.965.965 0 01-.343-.757c0-.343.123-.612.343-.807.22-.196.513-.293.88-.293.39 0 .684.097.904.293.22.195.342.464.342.807-.024.317-.122.562-.342.757z" />
		</svg>
		{isAnnouncedByScreenReader ? (
			<span
				css={css`
					${visuallyHidden}
				`}
			>
				Information
			</span>
		) : (
			''
		)}
	</>
);
