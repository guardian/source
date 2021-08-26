import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from './types';

export const SvgWhatsApp = ({ size }: IconProps) => (
	<svg
		viewBox="0 0 30 30"
		xmlns="http://www.w3.org/2000/svg"
		width={size ? iconSize[size] : undefined}
	>
		<path d="M22.4445 7.066C20.4705 5.092 17.8455 4 15.042 4C9.2775 4 4.584 8.6935 4.584 14.458C4.584 16.2955 5.067 18.1015 5.9805 19.687L4.5 25.0945L10.044 23.6455C11.5665 24.475 13.2885 24.916 15.042 24.916C20.8065 24.916 25.5 20.2225 25.5 14.458C25.5 11.6755 24.4185 9.0505 22.4445 7.066ZM15.042 23.152C13.4775 23.152 11.9445 22.732 10.611 21.9445L10.296 21.7555L7.0095 22.6165L7.8915 19.414L7.6815 19.0885C6.81 17.7025 6.348 16.096 6.3585 14.458C6.3585 9.67 10.254 5.7745 15.0525 5.7745C17.373 5.7745 19.557 6.6775 21.195 8.326C22.833 9.964 23.736 12.148 23.736 14.4685C23.736 19.2565 19.83 23.152 15.042 23.152ZM19.809 16.642C19.5465 16.516 18.2655 15.8755 18.024 15.7915C17.7825 15.7075 17.6145 15.6655 17.436 15.9175C17.2575 16.18 16.764 16.768 16.6065 16.936C16.4595 17.1145 16.302 17.1355 16.0395 16.999C15.777 16.873 14.937 16.5895 13.9395 15.7075C13.1625 15.0145 12.6375 14.164 12.4905 13.9015C12.333 13.639 12.4695 13.5025 12.606 13.366C12.7215 13.2505 12.8685 13.0615 12.9945 12.904C13.1205 12.7465 13.173 12.6415 13.257 12.463C13.341 12.2845 13.299 12.1375 13.236 12.001C13.173 11.875 12.648 10.5835 12.4275 10.0585C12.2175 9.544 11.997 9.6175 11.8395 9.607C11.6925 9.5965 11.514 9.5965 11.3355 9.5965C11.157 9.5965 10.8735 9.6595 10.6425 9.922C10.4115 10.1845 9.729 10.8145 9.729 12.106C9.729 13.387 10.6635 14.6365 10.8 14.8045C10.926 14.983 12.6375 17.6185 15.2625 18.7525C15.882 19.0255 16.3755 19.183 16.7535 19.2985C17.3835 19.498 17.9505 19.4665 18.402 19.4035C18.906 19.33 19.9455 18.7735 20.166 18.1645C20.3865 17.5555 20.3865 17.0305 20.313 16.9255C20.25 16.8415 20.0715 16.7785 19.809 16.642Z" />
	</svg>
);
