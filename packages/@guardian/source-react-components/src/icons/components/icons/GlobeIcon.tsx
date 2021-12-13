import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const GlobeIcon = ({ size }: IconProps): EmotionJSX.Element => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20 12C20 12.7151 19.9062 13.4083 19.7301 14.068H16.402C16.4651 13.4007 16.4983 12.709 16.4983 12C16.4983 11.2924 16.4653 10.602 16.4024 9.93603L19.7312 9.93603C19.9065 10.5945 20 11.2863 20 12ZM14.3926 9.93603C14.4611 10.5916 14.4983 11.2824 14.4983 12C14.4983 12.7191 14.461 13.4112 14.3922 14.068H9.60809C9.53931 13.4112 9.50195 12.7191 9.50195 12C9.50195 11.2824 9.53915 10.5916 9.60767 9.93603L14.3926 9.93603ZM16.1113 7.93603L18.8923 7.93603C18.0072 6.43817 16.6478 5.25389 15.0207 4.58993C15.4813 5.51848 15.855 6.65637 16.1113 7.93603ZM12 4H12.0001L12.0004 4C12.0034 3.99995 12.0257 3.99963 12.0785 4.02364C12.1386 4.05099 12.2423 4.11247 12.381 4.24289C12.6691 4.51382 13.0192 4.9988 13.3569 5.74939C13.6343 6.36619 13.8769 7.10379 14.0663 7.93603L9.93396 7.93603C10.1233 7.10379 10.366 6.36619 10.6434 5.74939C10.981 4.9988 11.3312 4.51382 11.6193 4.24289C11.758 4.11247 11.8616 4.05099 11.9218 4.02364C11.9693 4.00201 11.9921 4.00013 11.9984 4C11.9989 4 11.9995 4 12 4ZM8.97964 4.58979C8.51898 5.51837 8.14528 6.6563 7.88893 7.93603L5.10766 7.93604C5.99282 6.43807 7.35241 5.25372 8.97964 4.58979ZM7.59787 9.93603L4.26878 9.93604C4.09345 10.5945 4 11.2863 4 12C4 12.7151 4.09383 13.4083 4.26986 14.068H7.59825C7.53514 13.4007 7.50195 12.709 7.50195 12C7.50195 11.2924 7.53501 10.602 7.59787 9.93603ZM7.88974 16.068H5.11004C5.99526 17.5641 7.35387 18.7469 8.97964 19.4102C8.51946 18.4826 8.14606 17.3461 7.88974 16.068ZM12.0001 20C12.0001 20 12 20 12 20C11.9994 20 11.9988 20 11.9982 20C11.9916 19.9998 11.9687 19.9977 11.9218 19.9764C11.8616 19.949 11.758 19.8875 11.6193 19.7571C11.3312 19.4862 10.981 19.0012 10.6434 18.2506C10.3664 17.6348 10.1241 16.8986 9.93488 16.068H14.0654C13.8761 16.8986 13.6339 17.6348 13.3569 18.2506C13.0192 19.0012 12.6691 19.4862 12.381 19.7571C12.2423 19.8875 12.1386 19.949 12.0785 19.9764C12.0311 19.9979 12.0082 19.9999 12.0019 20C12.0013 20 12.0007 20 12.0001 20ZM15.0207 19.4101C16.6463 18.7467 18.0048 17.564 18.89 16.068H16.1105C15.8542 17.346 15.4808 18.4825 15.0207 19.4101ZM12.0001 2C16.0759 2.00004 19.5822 4.43845 21.1397 7.93603H21.1494V7.95793C21.6963 9.19392 22 10.5615 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12 2 12.0001 2 12.0001 2Z"
			/>
		</svg>
	);
};
