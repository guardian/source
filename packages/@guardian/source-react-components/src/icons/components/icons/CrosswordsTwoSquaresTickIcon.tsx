import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const CrosswordsTwoSquaresTickIcon = ({
	size,
}: IconProps): EmotionJSX.Element => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1 6.13888L1.48889 5.64999H20.0667V7.11666H13.2222V16.8944H20.0667V18.3611H1.48889L1 17.8722V6.13888ZM11.7556 16.8944V7.11667H2.46667V16.8944H11.7556ZM5.49779 11.7611H3.49334V11.2478H4.1289V8.87666L3.44445 8.94999V8.50999L4.44668 8.0211H4.88668V11.2478H5.49779V11.7611ZM14.1266 11.6389L14.8355 10.93L16.6689 12.8855L22.2911 8.14332L23 8.87666L16.8644 15.4522H16.4L14.1266 11.6389Z"
			/>
		</svg>
	);
};
