import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgNotificationsOn = ({
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
					fillRule="evenodd"
					clipRule="evenodd"
					d="M1.67213 11.9237C1.67213 14.5795 2.60656 17.0139 4.10656 18.9811L3.59016 19.4975C1.40164 17.7024 0 14.9975 0 11.9237C0 8.84998 1.40164 6.14506 3.59016 4.34998L4.10656 4.86637C2.60656 6.83358 1.67213 9.26801 1.67213 11.9237ZM22.2787 11.9237C22.2787 9.26801 21.418 6.83358 19.8442 4.86637L20.4098 4.34998C22.5983 6.14506 24 8.84998 24 11.9237C24 14.9975 22.5983 17.7024 20.4098 19.4975L19.8442 18.9811C21.418 17.0139 22.2787 14.5795 22.2787 11.9237ZM5.18855 11.9237C5.18855 13.4975 5.65577 14.8992 6.46724 16.0549L5.80331 16.6942C4.54921 15.4401 3.83609 13.7926 3.83609 11.9237C3.83609 10.0549 4.54921 8.33358 5.80331 7.15325L6.46724 7.76801C5.65577 8.94834 5.18855 10.35 5.18855 11.9237ZM18.8114 11.9237C18.8114 10.35 18.3442 8.94834 17.5574 7.76801L18.1721 7.15325C19.4262 8.33358 20.1639 10.0549 20.1639 11.9237C20.1639 13.7926 19.4262 15.4401 18.1721 16.6942L17.5574 16.0549C18.3442 14.8992 18.8114 13.4975 18.8114 11.9237ZM15.9344 11.9237C15.9344 9.73522 14.1885 7.98931 12 7.98931C9.81147 7.98931 8.06556 9.73522 8.06556 11.9237C8.06556 14.1123 9.81147 15.8582 12 15.8582C14.1885 15.8582 15.9344 14.1123 15.9344 11.9237Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				></span>
			) : (
				''
			)}
		</>
	);
};
