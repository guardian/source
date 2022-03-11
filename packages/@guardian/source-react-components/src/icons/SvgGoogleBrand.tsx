import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgGoogleBrand = ({
	size,
	isAnnouncedByScreenReader = false,
}: IconProps): EmotionJSX.Element => {
	return (
		<>
			<svg
				viewBox="0 0 30 30"
				xmlns="http://www.w3.org/2000/svg"
				width={size ? iconSize[size] : undefined}
				aria-hidden={true}
				focusable={false}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M6.54486 10.6482C6.94036 9.77821 7.49923 9.01919 8.15456 8.33236C9.63749 6.77802 11.433 5.78261 13.5585 5.4431C16.5333 4.96787 19.1957 5.66934 21.4965 7.65047C21.6419 7.77567 21.6778 7.84884 21.5198 8.00363C20.7077 8.79884 19.9084 9.60712 19.1044 10.4107C19.0219 10.4931 18.9663 10.5937 18.8198 10.4594C16.7941 8.60343 13.4877 8.62458 11.3353 10.6263C10.5963 11.3136 10.0708 12.1372 9.72676 13.0813C9.67655 13.0484 9.62379 13.0191 9.57645 12.9827C8.56557 12.205 7.55527 11.4264 6.54486 10.6482Z"
					fill="#D7282A"
				/>
				<mask
					id="mask0"
					mask-type="alpha"
					maskUnits="userSpaceOnUse"
					x="6"
					y="16"
					width="16"
					height="9"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M6.53699 16.8719H21.6145V24.691H6.53699V16.8719Z"
						fill="white"
					/>
				</mask>
				<g mask="url(#mask0)">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M9.703 16.8719C9.99334 17.6093 10.3542 18.3067 10.8905 18.8989C12.2541 20.4049 13.9444 21.0545 15.9696 20.8443C16.9105 20.7466 17.7678 20.4279 18.5689 19.9382C18.6457 20.0069 18.7189 20.0803 18.7999 20.1436C19.7374 20.8756 20.6761 21.606 21.6145 22.3368C20.5797 23.3195 19.358 23.9737 17.9837 24.3212C14.7433 25.1403 11.7564 24.6226 9.10402 22.5295C8.00747 21.6642 7.14497 20.5952 6.53699 19.33C7.59239 18.5106 8.6477 17.6912 9.703 16.8719Z"
						fill="#45AC43"
					/>
				</g>
				<mask
					id="mask1"
					mask-type="alpha"
					maskUnits="userSpaceOnUse"
					x="15"
					y="13"
					width="10"
					height="10"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M15.1718 13.1635H24.5V22.3368H15.1718V13.1635Z"
						fill="white"
					/>
				</mask>
				<g mask="url(#mask1)">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M21.6145 22.3368C20.6761 21.606 19.7374 20.8756 18.7999 20.1437C18.7189 20.0803 18.6458 20.0069 18.5689 19.9382C19.2042 19.4533 19.7344 18.8798 20.0826 18.1512C20.2214 17.8607 20.319 17.5566 20.4112 17.2492C20.4748 17.0372 20.4551 16.9548 20.1929 16.957C18.6311 16.9703 17.0693 16.9636 15.5074 16.9635C15.1766 16.9635 15.1763 16.9633 15.1763 16.6212C15.1761 15.5626 15.1813 14.504 15.1718 13.4454C15.17 13.2413 15.2058 13.1629 15.4356 13.1635C18.3163 13.1719 21.1971 13.1701 24.0779 13.1662C24.2334 13.166 24.3312 13.1775 24.3581 13.3667C24.7166 15.8862 24.4293 18.2935 23.1106 20.5171C22.7068 21.1978 22.2217 21.8195 21.6145 22.3368Z"
						fill="#5D7FBE"
					/>
				</g>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M9.70297 16.8719C8.64766 17.6912 7.59236 18.5106 6.53695 19.33C6.02157 18.3718 5.72429 17.3424 5.58561 16.2703C5.34531 14.4127 5.60935 12.6255 6.39738 10.9211C6.44066 10.8274 6.4955 10.7391 6.54492 10.6483C7.55533 11.4264 8.56564 12.205 9.57651 12.9826C9.62386 13.0191 9.67666 13.0484 9.72682 13.0813C9.30351 14.3423 9.3246 15.6059 9.70297 16.8719Z"
					fill="#F4C300"
				/>
			</svg>
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
};
