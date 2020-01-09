import { css } from "@emotion/core"
import { linkLight, LinkTheme } from "@guardian/src-foundations/themes"
import { textSans, textSansSizes } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"

export const link = css`
	position: relative;
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
		fill: currentColor;
		position: absolute;
		height: ${textSansSizes.medium}rem;
		width: auto;

		/* magic number to align the SVG to the text baseline*/
		bottom: 3px;
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
