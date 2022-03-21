import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgAppleBrand = ({
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
					d="M12.3789 5.61538C13.2816 5.61538 14.4132 5.00509 15.0871 4.19135C15.6974 3.45391 16.1424 2.42403 16.1424 1.39415C16.1424 1.25429 16.1297 1.11443 16.1043 1C15.0998 1.03814 13.8919 1.67387 13.1672 2.52575C12.595 3.17419 12.0737 4.19135 12.0737 5.23395C12.0737 5.38652 12.0992 5.5391 12.1119 5.58996C12.1755 5.60267 12.2772 5.61538 12.3789 5.61538ZM9.20025 21C10.4336 21 10.9803 20.1736 12.5188 20.1736C14.0826 20.1736 14.4259 20.9746 15.7991 20.9746C17.1469 20.9746 18.0496 19.7285 18.9015 18.5079C19.8551 17.1093 20.2492 15.7362 20.2746 15.6726C20.1856 15.6472 17.6046 14.5919 17.6046 11.6294C17.6046 9.06103 19.6389 7.90401 19.7533 7.815C18.4056 5.88239 16.3585 5.83153 15.7991 5.83153C14.2861 5.83153 13.0528 6.74698 12.2772 6.74698C11.438 6.74698 10.3318 5.88239 9.02225 5.88239C6.5302 5.88239 4 7.94215 4 11.8328C4 14.2486 4.94088 16.8042 6.0979 18.4571C7.08964 19.8557 7.95423 21 9.20025 21Z"
					fill="black"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Apple logo
				</span>
			) : (
				''
			)}
		</>
	);
};
