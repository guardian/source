import { css } from "@emotion/core"
import { size } from "@guardian/src-foundations"
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
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${size.large / 2}px;
		height: auto;
	}
`

export const iconRight = css`
	svg {
		margin: 0 ${-size.large / 8}px 0 ${size.large / 4}px;
	}
`

export const iconLeft = css`
	flex-direction: row-reverse;
	svg {
		margin: 0 ${size.large / 4}px 0 ${-size.large / 8}px;
	}
`
