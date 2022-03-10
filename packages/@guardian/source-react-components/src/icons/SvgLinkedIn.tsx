import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgLinkedIn = ({
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
				<path d="M10.8494 7.84374C10.8494 8.86839 10.1078 9.68588 8.8854 9.68588C7.74159 9.68588 7 8.86839 7 7.84374C7 6.79678 7.76516 6 8.93725 6C10.1093 6 10.8258 6.79678 10.8494 7.84374ZM7.09584 23V11.1408H10.7299V23H7.09584Z" />
				<path d="M12.9044 14.9239C12.9044 13.4451 12.8573 12.2148 12.8102 11.1408H15.9651L16.1332 12.7901H16.2055C16.6768 12.0141 17.8552 10.8779 19.8191 10.8779C22.2104 10.8779 24.0031 12.5033 24.0031 15.9948V23.0064H20.3659V16.4282C20.3659 14.9 19.8396 13.8578 18.5245 13.8578C17.5205 13.8578 16.9219 14.5606 16.6595 15.2394C16.5658 15.5373 16.5248 15.8497 16.5385 16.1621V23H12.9044V14.9239Z" />
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					LinkedIn logo
				</span>
			) : (
				''
			)}
		</>
	);
};
