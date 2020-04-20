import { css } from "@emotion/core"
import { remSpace, transitions } from "@guardian/src-foundations"
import { text, border } from "@guardian/src-foundations/palette"
import { headline, textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"

export const accordion = css`
	border-bottom: 1px solid ${border.primary};
`

export const accordionRow = css`
	padding: ${remSpace[2]};
	border-top: 1px solid ${border.primary};
`

export const button = css`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: ${remSpace[3]};
	align-items: baseline;
	color: ${text.primary};

	/* user agent overrides */
	background: none;
	outline: none;
	border: none;
	padding: 0;
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

export const showHideLabel = css`
	width: auto;
	display: flex;
	align-items: center;
	${textSans.small({ fontWeight: "bold" })};
`

export const chevronIcon = css`
	svg {
		/* TODO: we need to tidy up size */
		width: 15px;
		height: 15px;
		margin-left: ${remSpace[1]};
	}
`

export const chevronIconUp = css`
	svg {
		transform: rotate(0);
		transition: transform ${transitions.short};
	}
`

export const chevronIconDown = css`
	svg {
		transform: rotate(180deg);
		transition: transform ${transitions.short};
	}
`
