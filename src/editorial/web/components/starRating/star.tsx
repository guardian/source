import { neutral } from '@guardian/src-foundations/palette';
import type { FC } from 'react';

interface Props {
	starId: string;
	isEmpty: boolean;
}

const Star: FC<Props> = ({ starId, isEmpty }) => {
	if (isEmpty)
		return (
			<svg width="14" height="13" viewBox="0 0 14 13">
				<path
					id={`star-${starId}`}
					clipPath={`url(#clip-${starId})`}
					strokeWidth="2"
					stroke={neutral[7]}
					fill="transparent"
					d="M0 5.2L3.7 8l-1.4 4.6.5.4 3.7-2.8 3.7 2.8.5-.4L9.3 8 13 5.2l-.2-.6H8.2L6.8 0h-.6L4.8 4.6H.2l-.2.6z"
				/>
				<clipPath id={`clip-${starId}`}>
					<use xlinkHref={`#star-${starId}`} stroke="none" />
				</clipPath>
			</svg>
		);

	return (
		<svg width="14" height="13" viewBox="0 0 14 13">
			<path
				fill={neutral[7]}
				strokeWidth="0"
				d="M0 5.2L3.7 8l-1.4 4.6.5.4 3.7-2.8 3.7 2.8.5-.4L9.3 8 13 5.2l-.2-.6H8.2L6.8 0h-.6L4.8 4.6H.2l-.2.6z"
			/>
		</svg>
	);
};

export { Star };
