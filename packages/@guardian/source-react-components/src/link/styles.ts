import type { SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';
import {
	focusHalo,
	space,
	textSans,
	width,
} from '@guardian/source-foundations';
import type { ReactElement } from 'react';
import type { LinkTheme } from './theme';
import { linkThemeDefault } from './theme';
import type { IconSide, LinkPriority } from './types';

export const link = css`
	position: relative;
	${textSans.medium()};
	cursor: pointer;
	text-decoration: underline;

	display: inline;
	align-items: center;

	&:focus {
		${focusHalo};
	}
`;

export const buttonLink = css`
	/* override user agent styles */
	border: none;
	background: transparent;
	padding: 0;
`;

export const primary = (link: LinkTheme = linkThemeDefault.link) => css`
	color: ${link.textPrimary};

	&:hover {
		color: ${link.textPrimaryHover};
	}
`;

export const secondary = (link: LinkTheme = linkThemeDefault.link) => css`
	color: ${link.textSecondary};

	&:hover {
		color: ${link.textSecondaryHover};
	}
`;

export const subdued = css`
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export const icon = css`
	svg {
		fill: currentColor;
		/*
		TODO: hardcoded bottom margin to vertically align
		icons with text. This needs to be revisited when
		the rules of icon spacing have been formalised
		 */
		margin-bottom: -3px;
		width: ${width.iconXsmall}px;
		height: auto;
	}
`;

export const iconRight = css`
	svg {
		margin-left: -${space[5]}px;
	}
`;

export const iconLeft = css`
	svg {
		margin-left: -${space[6]}px;
		margin-right: ${space[1]}px;
	}
`;

const priorities: {
	[key in LinkPriority]: (link?: LinkTheme) => SerializedStyles;
} = {
	primary,
	secondary,
};

const iconSides: {
	[key in IconSide]: SerializedStyles;
} = {
	right: iconRight,
	left: iconLeft,
};

export const linkStyles = ({
	isButton,
	priority,
	isSubdued,
	iconSvg,
	iconSide = 'left',
	cssOverrides,
}: {
	isButton?: boolean;
	priority: LinkPriority;
	isSubdued?: boolean;
	iconSvg?: ReactElement;
	iconSide?: IconSide;
	cssOverrides?: SerializedStyles | SerializedStyles[];
}) => {
	/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	return (theme: Theme) => [
		link,
		isButton ? buttonLink : '',
		priorities[priority](theme.link),
		isSubdued ? subdued : '',
		iconSvg ? icon : '',
		iconSvg ? iconSides[iconSide] : '',
		cssOverrides,
	];
};