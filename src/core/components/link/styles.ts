import { css } from "@emotion/core"
import { width } from "@guardian/src-foundations/size"
import { linkDefault, LinkTheme } from "@guardian/src-foundations/themes"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"

export const link = css`
	position: relative;
	${textSans.medium()};
	cursor: pointer;

	display: inline;
	align-items: center;

	&:focus {
		${focusHalo};
	}
`

export const primary = ({ link }: { link: LinkTheme } = linkDefault) => css`
	color: ${link.textPrimary};

	&:hover {
		color: ${link.textPrimaryHover};
	}
`

export const secondary = ({ link }: { link: LinkTheme } = linkDefault) => css`
	color: ${link.textSecondary};

	&:hover {
		color: ${link.textSecondaryHover};
	}
`

export const subdued = css`
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`

export const icon = css`
	/*
	FIXME: This makes icons sit vertically centred, but breaks links with long
	text descriptions onto a separate line to surrounding text
	 */
	display: inline-flex;
	svg {
		fill: currentColor;
		position: absolute;
		width: ${width.iconXsmall}px;
		height: auto;
	}
`

export const iconRight = css`
	svg {
		right: 0;
	}
`

export const iconLeft = css`
	svg {
		left: 0;
	}
`
