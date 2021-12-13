import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SettingsIcon = ({ size }: IconProps): EmotionJSX.Element => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20.7052 14.195C20.5306 15.0181 20.1565 15.8413 19.7823 16.5397L20.9546 18.4354C20.2562 19.3583 19.3832 20.2313 18.4853 20.9048L16.5896 19.6825C15.8163 20.1066 15.068 20.4308 14.2449 20.7052L13.771 22.8254C13.1973 22.9252 12.6485 23 12.0249 23C11.4512 23 10.8027 22.9252 10.2789 22.8254L9.80499 20.6553C8.98186 20.4308 8.15873 20.1066 7.46032 19.6825L5.56463 20.9048C4.64172 20.2063 3.76871 19.3583 3.09524 18.4354L4.31746 16.5147C3.89342 15.8413 3.56916 15.0181 3.34467 14.195L1.1746 13.7211C1.07483 13.1973 1 12.5488 1 11.9751C1 11.3515 1.07483 10.8027 1.1746 10.229L3.34467 9.7551C3.56916 8.93197 3.89342 8.15873 4.31746 7.41043L3.09524 5.51474C3.76871 4.61678 4.64172 3.74376 5.56463 3.04535L7.46032 4.21769C8.15873 3.84354 8.98186 3.46939 9.80499 3.29478L10.2789 1.07483C10.8027 1 11.4512 1 12.0249 1C12.5986 1 13.1973 1.02494 13.771 1.07483L14.2449 3.29478C15.068 3.46939 15.8163 3.84354 16.5896 4.21769L18.4853 3.04535C19.4082 3.76871 20.2313 4.59184 20.9546 5.51474L19.7823 7.41043C20.1565 8.13379 20.5306 8.93197 20.7052 9.7551L22.9252 10.229C22.9751 10.8027 23 11.4014 23 11.9751C23 12.5737 22.9751 13.1474 22.9252 13.7211L20.7052 14.195ZM12.0249 19.034C15.9161 19.034 19.0839 15.8662 19.0839 11.9751C19.0839 8.0839 15.9161 4.9161 12.0249 4.9161C8.13378 4.9161 4.96598 8.0839 4.96598 11.9751C4.96598 15.8662 8.13378 19.034 12.0249 19.034Z"
			/>
		</svg>
	);
};
