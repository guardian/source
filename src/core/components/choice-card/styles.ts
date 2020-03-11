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

export const fieldset = css`
	border: 0;
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
		box-shadow: inset 0 0 0 4px ${choiceCard.borderColorChecked};
		background-color: ${choiceCard.backgroundChecked};

		& > span {
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
		& > span {
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
	flex: 1 0 auto;
	display: flex;
	box-sizing: border-box;
	/* TODO: let's talk about size! */
	min-height: ${size.large}px;
	margin: 0 0 ${space[2]}px 0;
	align-items: center;
	justify-content: flex-start;
	padding-left: ${space[5]}px;
	box-shadow: inset 0 0 0 2px ${choiceCard.borderColor};
	border-radius: 4px;
	position: relative;
	cursor: pointer;

	${from.mobileLandscape} {
		justify-content: center;
		padding-left: 0;
		margin: 0 ${space[2]}px 0 0;
		&:last-child {
			margin: 0;
		}
	}

	& > span {
		color: ${choiceCard.textLabel};
		${textSans.medium({ fontWeight: "bold" })};
	}

	&:hover {
		box-shadow: inset 0 0 0 4px ${choiceCard.borderColorHover};

		& > span {
			color: ${choiceCard.textHover};
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
	top: 16px;
	width: 6px;
	height: 12px;
	transform: rotate(45deg);
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
