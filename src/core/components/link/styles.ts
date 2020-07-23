import { css } from "@emotion/core"
import { width } from "@guardian/src-foundations/size"
import { linkDefault, LinkTheme } from "@guardian/src-foundations/themes"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"

export const link = css`
	position: relative;
	${textSans.medium()};
	cursor: pointer;

	display: flex;
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
