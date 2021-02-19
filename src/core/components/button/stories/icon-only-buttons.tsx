import { css } from '@emotion/react';
import { SvgCross } from '@guardian/src-icons';
import { space } from '@guardian/src-foundations';
import { Button } from '../index';

/* eslint-disable react/jsx-key */
const iconButtons = [
	<Button icon={<SvgCross />} hideLabel={true}>
		Dismiss the subscribe banner
	</Button>,
	<Button size="small" icon={<SvgCross />} hideLabel={true}>
		Dismiss the subscribe banner
	</Button>,
	<Button size="xsmall" icon={<SvgCross />} hideLabel={true}>
		Dismiss the subscribe banner
	</Button>,
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

export const iconOnlyButtons = () => (
	<div css={flexStart}>
		{iconButtons.map((button, index) => (
			<div key={index}>{button}</div>
		))}
	</div>
);
iconOnlyButtons.story = {
	name: 'icon only buttons',
};
