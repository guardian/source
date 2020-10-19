import { css } from "@emotion/core"
import { width } from "@guardian/src-foundations/size"
import { linkDefault, LinkTheme } from "@guardian/src-foundations/themes"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"
import { space } from "@guardian/src-foundations"

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
`

export const buttonLink = css`
	/* override user agent styles */
	border: none;
	background: transparent;
	padding: 0;
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
	svg {
		fill: currentColor;
		vertical-align: text-top;
		width: ${width.iconXsmall}px;
		height: auto;
	}
`

export const iconRight = css`
	svg {
		margin-left: -${space[5]}px;
	}
`

export const iconLeft = css`
	svg {
		margin-left: -${space[6]}px;
		margin-right: ${space[1]}px;
	}
`
