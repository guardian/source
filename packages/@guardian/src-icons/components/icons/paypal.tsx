import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const SvgPayPal = ({ size }: IconProps) => (
	<svg
		viewBox="0 0 30 30"
		xmlns="http://www.w3.org/2000/svg"
		width={size ? iconSize[size] : undefined}
	>
		<path
			d="M21.7478 10.5732C21.7311 10.68 21.712 10.7892 21.6905 10.9013C20.9527 14.6896 18.4284 15.9982 15.2044 15.9982H13.5629C13.1686 15.9982 12.8364 16.2845 12.7749 16.6735L11.9345 22.0036L11.6965 23.5145C11.6565 23.7698 11.8534 24 12.111 24H15.0225C15.3672 24 15.6601 23.7495 15.7144 23.4095L15.743 23.2616L16.2912 19.7829L16.3264 19.592C16.3801 19.2508 16.6735 19.0003 17.0183 19.0003H17.4537C20.2745 19.0003 22.4826 17.8551 23.128 14.541C23.3976 13.1566 23.2581 12.0006 22.5447 11.1876C22.3288 10.9425 22.0609 10.7391 21.7478 10.5732Z"
			fill="#A7B4C8"
		/>
		<path d="M20.9758 10.2654C20.8631 10.2326 20.7467 10.2028 20.6274 10.176C20.5076 10.1497 20.3847 10.1265 20.2582 10.1062C19.8156 10.0346 19.3307 10.0006 18.8112 10.0006H14.4258C14.3179 10.0006 14.2153 10.0251 14.1234 10.0692C13.9212 10.1664 13.7709 10.3579 13.7345 10.5923L12.8016 16.5011L12.7748 16.6734C12.8362 16.2845 13.1685 15.9982 13.5627 15.9982H15.2042C18.4282 15.9982 20.9525 14.689 21.6904 10.9013C21.7124 10.7892 21.7309 10.68 21.7476 10.5732C21.5609 10.4742 21.3587 10.3895 21.141 10.3173C21.0873 10.2994 21.0319 10.2821 20.9758 10.2654Z" />
		<path d="M13.7346 10.5923C13.7709 10.3579 13.9213 10.1664 14.1235 10.0698C14.2159 10.0256 14.3179 10.0012 14.4259 10.0012H18.8112C19.3307 10.0012 19.8157 10.0352 20.2583 10.1068C20.3847 10.1271 20.5076 10.1503 20.6275 10.1766C20.7468 10.2034 20.8631 10.2332 20.9758 10.266C21.0319 10.2827 21.0874 10.3 21.1417 10.3173C21.3594 10.3895 21.5616 10.4748 21.7483 10.5732C21.9678 9.17328 21.7465 8.2201 20.9896 7.35699C20.1551 6.4068 18.649 6 16.7217 6H11.1267C10.7331 6 10.3973 6.28631 10.3364 6.67581L8.00596 21.4477C7.96003 21.7399 8.1855 22.0036 8.48016 22.0036H11.9344L12.8017 16.501L13.7346 10.5923Z" />
	</svg>
);
