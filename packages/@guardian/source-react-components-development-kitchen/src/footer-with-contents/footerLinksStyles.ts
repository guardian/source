import { css } from '@emotion/react';
import {
	between,
	brand,
	brandAlt,
	from,
	space,
	textSans,
	until,
} from '@guardian/source-foundations';

export const fullWidthContainer = css`
	width: 100%;
`;

export const linkListStyles = css`
	background-color: ${brand[400]};
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
	padding-bottom: 64px;
	${from.tablet} {
		padding-bottom: ${space[6]}px;
	}
`;

export const linkColumnsStyles = css`
	${until.desktop} {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-auto-rows: min-content;
		padding-bottom: 55px;
		/* Centre divider */
		:after {
			position: absolute;
			left: 50%;
			bottom: 18px;
			content: '';
			width: 1px;
			background-color: ${brand[600]};
			height: calc(100% - 18px);
		}

		${from.tablet} {
			grid-template-columns: 1fr 3fr;
			padding-bottom: ${space[9]}px;
			:after {
				content: unset;
			}
		}
	}
`;

export function getListStyles(useColumns: boolean) {
	return useColumns ? [linkListStyles, linkColumnsStyles] : linkListStyles;
}

export const linkListItemStyles = css`
	padding-top: ${space[3]}px;
	${from.tablet} {
		padding-top: 10px;
	}
	:not(:first-of-type) {
		padding-left: ${space[2]}px;
		border-left: 1px solid ${brand[600]};
		${from.tablet} {
			padding-left: 10px;
		}
	}
	${until.tablet} {
		:not(:last-of-type) {
			padding-right: ${space[3]}px;
			${from.mobileMedium} {
				padding-right: ${space[6]}px;
			}
		}
	}
`;

export const linkColumnItemStyles = css`
	padding-top: ${space[3]}px;

	:nth-child(even) {
		padding-left: ${space[2]}px;
		${from.tablet} {
			padding-left: 10px;
		}
	}

	${between.tablet.and.desktop} {
		width: 100%;
		:nth-child(odd) {
			border-right: 1px solid ${brand[600]};
		}
	}

	${from.desktop} {
		${linkListItemStyles}
	}
`;

export function getItemStyles(useColumns: boolean) {
	return useColumns ? linkColumnItemStyles : linkListItemStyles;
}

export const linkElementStyles = css`
	display: block;
	text-decoration: none;
	${textSans.small({ lineHeight: 'tight' })}
	:hover {
		text-decoration: underline;
		color: ${brandAlt[400]};
	}
	${from.mobileMedium} {
		${textSans.medium({ lineHeight: 'tight' })}
	}
`;
