import { css } from "@emotion/core"
import { space } from "@guardian/src-foundations"
import { linkLight, LinkTheme } from "@guardian/src-foundations/themes"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"

export const link = css`
	${textSans.medium()};
	cursor: pointer;

	&:focus {
		${focusHalo};
	}
`

export const primary = ({ link }: { link: LinkTheme } = linkLight) => css`
	color: ${link.textPrimary};

	&:hover {
		color: ${link.textPrimaryHover};
	}
`

export const secondary = ({ link }: { link: LinkTheme } = linkLight) => css`
	color: ${link.textSecondary};

	&:hover {
		color: ${link.textSecondaryHover};
	}
`

export const icon = css`
	border-bottom: 1px solid currentColor;
	text-decoration: none;
	svg {
		fill: currentColor;
		position: relative;
		width: auto;
		height: 17px;
	}
`

export const iconRight = css`
	svg {
		margin-left: ${space[1]}px;
	}
`

export const iconLeft = css`
	svg {
		margin-right: ${space[1]}px;
	}
`
