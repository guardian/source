import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const GoogleBrandIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.54492 7.64816C3.94042 6.77821 4.49929 6.01919 5.15462 5.33236C6.63755 3.77802 8.43307 2.78261 10.5585 2.4431C13.5333 1.96787 16.1958 2.66934 18.4966 4.65047C18.6419 4.77567 18.6779 4.84884 18.5198 5.00363C17.7077 5.79884 16.9085 6.60712 16.1045 7.41067C16.022 7.49306 15.9663 7.59368 15.8199 7.45942C13.7942 5.60343 10.4878 5.62458 8.33532 7.62633C7.59635 8.31359 7.07086 9.13718 6.72682 10.0813C6.67661 10.0484 6.62385 10.0191 6.57651 9.98265C5.56564 9.20499 4.55533 8.42644 3.54492 7.64816Z"
				fill="#D7282A"
			/>
			<mask
				id="mask0_1356_2237"
				mask-type="alpha"
				maskUnits="userSpaceOnUse"
				x="3"
				y="13"
				width="16"
				height="9"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M3.53699 13.8719H18.6145V21.691H3.53699V13.8719Z"
					fill="white"
				/>
			</mask>
			<g mask="url(#mask0_1356_2237)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M6.703 13.8719C6.99334 14.6093 7.35421 15.3067 7.89048 15.8989C9.2541 17.4049 10.9444 18.0545 12.9696 17.8443C13.9105 17.7466 14.7678 17.4279 15.5689 16.9382C15.6457 17.0069 15.7189 17.0803 15.7999 17.1436C16.7374 17.8756 17.6761 18.606 18.6145 19.3368C17.5797 20.3195 16.358 20.9737 14.9837 21.3212C11.7433 22.1403 8.75637 21.6226 6.10402 19.5295C5.00747 18.6642 4.14497 17.5952 3.53699 16.33C4.59239 15.5106 5.6477 14.6912 6.703 13.8719Z"
					fill="#45AC43"
				/>
			</g>
			<mask
				id="mask1_1356_2237"
				mask-type="alpha"
				maskUnits="userSpaceOnUse"
				x="12"
				y="10"
				width="10"
				height="10"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M12.1718 10.1635H21.5V19.3368H12.1718V10.1635Z"
					fill="white"
				/>
			</mask>
			<g mask="url(#mask1_1356_2237)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M18.6145 19.3368C17.6761 18.606 16.7374 17.8756 15.7999 17.1437C15.7189 17.0803 15.6458 17.0069 15.5689 16.9382C16.2042 16.4533 16.7344 15.8798 17.0826 15.1512C17.2214 14.8607 17.319 14.5566 17.4112 14.2492C17.4748 14.0372 17.4551 13.9548 17.1929 13.957C15.6311 13.9703 14.0693 13.9636 12.5074 13.9635C12.1766 13.9635 12.1763 13.9633 12.1763 13.6212C12.1761 12.5626 12.1813 11.504 12.1718 10.4454C12.17 10.2413 12.2058 10.1629 12.4356 10.1635C15.3163 10.1719 18.1971 10.1701 21.0779 10.1662C21.2334 10.166 21.3312 10.1775 21.3581 10.3667C21.7166 12.8862 21.4293 15.2935 20.1106 17.5171C19.7068 18.1978 19.2217 18.8195 18.6145 19.3368Z"
					fill="#5D7FBE"
				/>
			</g>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.70297 13.8719C5.64766 14.6912 4.59236 15.5106 3.53695 16.33C3.02157 15.3718 2.72429 14.3424 2.58561 13.2703C2.34531 11.4127 2.60935 9.62548 3.39738 7.92105C3.44066 7.82741 3.4955 7.73913 3.54492 7.64825C4.55533 8.42644 5.56564 9.20499 6.57651 9.98265C6.62386 10.0191 6.67666 10.0484 6.72682 10.0813C6.30351 11.3423 6.3246 12.6059 6.70297 13.8719Z"
				fill="#F4C300"
			/>
		</svg>
	);
};
