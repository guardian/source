import { css } from "@emotion/core"
import { space, size } from "@guardian/src-foundations"
import { visuallyHidden } from "@guardian/src-foundations/accessibility"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"
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
	display: flex;
	justify-content: flex-start;
`

export const groupLabel = css`
	${textSans.medium({ fontWeight: "bold" })};
	margin-bottom: ${space[1]}px;
`

export const input = ({
	choiceCard,
}: { choiceCard: ChoiceCardTheme } = choiceCardDefault) => css`
	${visuallyHidden};

	&:focus + label {
		${focusHalo};
	}

	&:checked + label {
		color: ${choiceCard.textChecked};
		box-shadow: inset 0 0 0 4px ${choiceCard.borderColorChecked};
		background-color: ${choiceCard.backgroundChecked};
	}
`

export const choiceCard = ({
	choiceCard,
}: { choiceCard: ChoiceCardTheme } = choiceCardDefault) => css`
	flex: 1 0 auto;
	box-sizing: border-box;
	display: flex;
	/* TODO: let's talk about size! */
	min-height: ${size.large}px;
	max-width: 150px;
	margin: 0 ${space[2]}px 0 0;
	align-items: center;
	justify-content: center;
	/* TODO: prefer curentColor unless it has to be different to text colour */
	box-shadow: inset 0 0 0 2px ${choiceCard.borderColor};
	border-radius: 4px;
	position: relative;

	color: ${choiceCard.text};
	${textSans.medium({ fontWeight: "bold" })};
	cursor: pointer;

	&:last-child {
		margin: 0;
	}

	&:hover {
		color: ${choiceCard.textChecked};
		box-shadow: inset 0 0 0 4px ${choiceCard.borderColorChecked};
	}
`
