import { css } from "@emotion/react";
import { SvgArrowRightStraight } from "@guardian/src-icons";
import { space } from "@guardian/src-foundations";
import { LinkButton } from "../index";

/* eslint-disable react/jsx-key */
const textIconButtons = [
	<LinkButton href="#" icon={<SvgArrowRightStraight />}>
		Link button: icon to the left
	</LinkButton>,
	<LinkButton href="#" iconSide="right" icon={<SvgArrowRightStraight />}>
		Link button: icon to the right
	</LinkButton>,
];

const textIconButtonsSmall = [
	<LinkButton href="#" icon={<SvgArrowRightStraight />} size="small">
		Small link button: to the left
	</LinkButton>,
	<LinkButton
		href="#"
		icon={<SvgArrowRightStraight />}
		iconSide="right"
		size="small"
	>
		Small link button: to the right
	</LinkButton>,
];

const textIconButtonsXsmall = [
	<LinkButton href="#" icon={<SvgArrowRightStraight />} size="xsmall">
		Extra small link button: to the left
	</LinkButton>,
	<LinkButton
		href="#"
		iconSide="right"
		icon={<SvgArrowRightStraight />}
		size="xsmall"
	>
		Extra small link button: to the right
	</LinkButton>,
];

/* eslint-enable react/jsx-key */

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> div {
		margin-right: ${space[9]}px;
	}
`;

const bottomSpacer = css`
	margin-bottom: ${space[9]}px;
`;

export const textAndIconLinkButtons = () => (
	<div>
		<div css={[flexStart, bottomSpacer]}>
			{textIconButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
		<div css={[flexStart, bottomSpacer]}>
			{textIconButtonsSmall.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
		<div css={[flexStart, bottomSpacer]}>
			{textIconButtonsXsmall.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</div>
);
textAndIconLinkButtons.story = {
	name: "text and icon link buttons",
};
