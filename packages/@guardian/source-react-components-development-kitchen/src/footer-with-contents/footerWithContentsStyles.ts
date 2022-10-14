import { css } from '@emotion/react';
import {
	brand,
	from,
	neutral,
	space,
	textSans,
} from '@guardian/source-foundations';

export const footer = css`
	background-color: ${brand[400]};
	color: ${neutral[100]};
	padding-bottom: ${space[1]}px;
	${textSans.medium()};
`;

export const contentWrapperStyles = css`
	display: flex;
	position: relative;
`;

export const copyrightStyles = css`
	display: block;
	${textSans.xxsmall()};
	padding-top: ${space[6]}px;
	padding-bottom: 18px;
	${from.tablet} {
		padding-top: ${space[3]}px;
	}
`;

export const backToTopStyles = css`
	background-color: ${brand[400]};
	padding: 0 ${space[2]}px;
	position: absolute;
	bottom: -21px;
	right: ${space[3]}px;
	${from.tablet} {
		padding: 0 5px;
		right: 0;
	}
`;
