import { css } from "@emotion/core"
import { space, remSpace, transitions } from "@guardian/src-foundations"
import { visuallyHidden } from "@guardian/src-foundations/accessibility"
import { text, border } from "@guardian/src-foundations/palette"
import { headline, textSans } from "@guardian/src-foundations/typography"
import { until, from } from "@guardian/src-foundations/mq"
import { focusHalo } from "@guardian/src-foundations/accessibility"

export const accordion = css`
	border-bottom: 1px solid ${border.primary};
`

export const accordionRow = css`
	border-top: 1px solid ${border.primary};
`

export const button = css`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: ${remSpace[2]} 0 ${remSpace[6]} 0;
	align-items: center;
	color: ${text.primary};

	/* user agent overrides */
	background: none;
	outline: none;
	border: none;
	cursor: pointer;
	text-align: left;

	&:focus div {
		${focusHalo};
	}
`

export const labelText = css`
	${headline.xxxsmall()};
	margin-right: ${remSpace[4]};
`

export const expandedBody = css`
	/*
	TODO:
	Hardcoded max-height because auto is invalid.
	If content is longer, we'll need to set overflow: auto
	but only after max-height has been reached.
	Otherwise, for short content we'll always see a flash
	of a scrollbar as the row height is transitioning
	*/
	max-height: 500px;
	transition: max-height ${transitions.medium};
	overflow: hidden;
	height: auto;
`

export const collapsedBody = css`
	max-height: 0;
	/*
	TODO:
	This transition is being ignored as the hidden
	attribute is applied immediately

	transition: max-height ${transitions.short};
	*/
	overflow: hidden;
`

export const toggle = css`
	width: auto;
	display: flex;
	align-items: center;
`

export const toggleLabel = css`
	${textSans.small({ fontWeight: "bold" })};

	${until.tablet} {
		${visuallyHidden}
	}
`
const chevronIcon = css`
	svg {
		/* TODO: think about icon sizing */
		width: 18px;
		height: 18px;

		${from.tablet} {
			width: 26px;
			height: 26px;
		}
		margin-left: ${remSpace[1]};
		transition: ${transitions.short};
	}
`

export const chevronIconDown = css`
	${chevronIcon};
	svg {
		transform: translate(0, 0);
		transition: transform ${transitions.short};
	}

	&:hover,
	&:focus {
		svg {
			transform: translate(0, ${space[1] / 2}px);
		}
	}
`

export const chevronIconUp = css`
	${chevronIcon};
	svg {
		transform: rotate(180deg);
		transition: transform ${transitions.short};
	}
`

export const toggleIconWithLabel = css`
	svg {
		width: 18px;
		height: 18px;
	}
`
