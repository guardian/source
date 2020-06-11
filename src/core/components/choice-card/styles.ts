import { css } from "@emotion/core"
import { space, size, transitions } from "@guardian/src-foundations"
import { visuallyHidden } from "@guardian/src-foundations/accessibility"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"
import { from } from "@guardian/src-foundations/mq"
import {
	ChoiceCardTheme,
	choiceCardDefault,
} from "@guardian/src-foundations/themes"
import { width, height } from "@guardian/src-foundations/size"

export const fieldset = css`
	border: 0;
	padding: 0;
	margin: 0;
`

// TODO: This is currently applied to a div instead of the fieldset
// due to a Chrome / Safari bug that prevents flexbox model working
// on fieldset elements
// https://bugs.chromium.org/p/chromium/issues/detail?id=375693
export const flexContainer = css`
	width: 100%;

	${from.mobileLandscape} {
		display: flex;
		justify-content: flex-start;
	}
`

export const groupLabel = ({
	choiceCard,
}: { choiceCard: ChoiceCardTheme } = choiceCardDefault) => css`
	${textSans.medium({ fontWeight: "bold" })};
	color: ${choiceCard.textGroupLabel};
	margin-bottom: ${space[1]}px;
`

export const groupLabelSupporting = ({
	choiceCard,
}: { choiceCard: ChoiceCardTheme } = choiceCardDefault) => css`
	${textSans.small()};
	color: ${choiceCard.textGroupLabelSupporting};
	margin-bottom: ${space[3]}px;
	/* Negate the user agent spacing between legend and fieldset content */
	margin-top: ${-space[2]}px;
`

export const input = ({
	choiceCard,
}: { choiceCard: ChoiceCardTheme } = choiceCardDefault) => css`
	${visuallyHidden};

	&:focus + label {
		${focusHalo};
	}

	&:checked + label {
		box-shadow: inset 0 0 0 4px ${choiceCard.borderChecked};
		background-color: ${choiceCard.backgroundChecked};

		& > * {
			color: ${choiceCard.textChecked};

			/* last child is the tick */
			&:last-child {
				&:before {
					right: 0;
				}
				&:after {
					top: 0;
				}
			}
		}
	}
`

// TODO: use animation durations defined in foundations
export const tickAnimation = css`
	@keyframes labelFadeOutIn {
		0% {
			opacity: 1;
		}
		1%,
		80% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes tickFadeInOut {
		0% {
			opacity: 0;
		}
		10%,
		40% {
			opacity: 1;
		}
		70% {
			opacity: 0;
		}
	}

	&:checked + label {
		& > * {
			animation-duration: 1s;
			animation-name: labelFadeOutIn;

			/* last child is the tick */
			&:last-child {
				animation-name: tickFadeInOut;
			}
		}
	}
`

export const choiceCard = ({
	choiceCard,
}: { choiceCard: ChoiceCardTheme } = choiceCardDefault) => css`
	flex: 1;
	display: flex;
	justify-content: center;
	/* TODO: let's talk about size! */
	min-height: ${size.medium}px;
	margin: 0 0 ${space[2]}px 0;
	box-shadow: inset 0 0 0 2px ${choiceCard.border};
	border-radius: 4px;
	position: relative;
	cursor: pointer;
	color: ${choiceCard.textLabel};

	${from.mobileLandscape} {
		margin: 0 ${space[2]}px 0 0;

		&:last-child {
			margin: 0;
		}
	}

	&:hover {
		box-shadow: inset 0 0 0 4px ${choiceCard.borderHover};
		color: ${choiceCard.textHover};
	}
`

export const contentWrapper = css`
	flex: 0 1 auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	position: relative;
	box-sizing: border-box;

	${from.mobileLandscape} {
		flex-direction: column;
		padding: ${space[2]}px ${space[6]}px;
	}

	& > * {
		${textSans.medium({ fontWeight: "bold" })};
		text-align: center;
	}

	& svg {
		position: absolute;
		width: ${width.iconMedium}px;
		max-height: ${height.iconMedium}px;
		left: ${-width.iconMedium - space[1]}px; /* width + 4px "margin" */
		fill: currentColor;

		${from.mobileLandscape} {
			position: static;
		}
	}
`

/* We need to explicitly set the width of the content to support
flex-direction: column in IE11 */
export const contentWrapperLabelOnly = css`
	width: 100%;
	${from.mobileLandscape} {
		& > div {
			width: 100%;
		}
	}
`

// TODO: most of this is duplicated in the checkbox component
// We should extract it into its own module somewhere
export const tick = ({
	choiceCard,
}: { choiceCard: ChoiceCardTheme } = choiceCardDefault) => css`
	/* overall positional properties */
	position: absolute;
	top: 50%;
	left: 50%;
	width: 7px;
	height: 20px;
	transform: rotate(45deg) translateX(-100%) translateY(-35%);
	opacity: 0;

	/* the checkmark ✓ */
	&:after,
	&:before {
		position: absolute;
		display: block;
		background-color: ${choiceCard.backgroundTick};
		transition: all ${transitions.short} ease-in-out;
		content: "";
	}

	/* the short side */
	&:before {
		height: 2px;
		bottom: 0;
		left: 0;
		right: 100%;
		transition-delay: 0.05s;
	}

	/* the long side */
	&:after {
		bottom: 0;
		right: 0;
		top: 100%;
		width: 2px;
		transition-delay: 0.1s;
	}
`

export const errorChoiceCard = ({
	choiceCard,
}: { choiceCard: ChoiceCardTheme } = choiceCardDefault) => css`
	box-shadow: inset 0 0 0 4px ${choiceCard.borderError};

	& > * {
		color: ${choiceCard.textError};
	}
`
