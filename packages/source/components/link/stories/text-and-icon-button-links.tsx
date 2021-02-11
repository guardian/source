import React from 'react';
import { css } from '@emotion/react';
import {
	SvgArrowRightStraight,
	SvgIndent,
	SvgExternal,
	SvgChevronLeftSingle,
} from '../../../icons';
import { space } from '../../../foundations/src';
import { ButtonLink } from '../index';

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> * {
		margin-right: ${space[9]}px;
	}
`;
const spacer = css`
	margin-bottom: ${space[4]}px;
`;

export const textAndIconButtonLinks = () => (
	<>
		<div css={spacer}>
			<ButtonLink
				icon={<SvgExternal />}
				onClick={() => console.log('Clicked')}
			>
				Terms and conditions
			</ButtonLink>
		</div>
		<div css={[flexStart, spacer]}>
			<ButtonLink
				icon={<SvgChevronLeftSingle />}
				onClick={() => console.log('Clicked')}
			>
				Previous
			</ButtonLink>
			<ButtonLink
				iconSide="right"
				icon={<SvgArrowRightStraight />}
				onClick={() => console.log('Clicked')}
			>
				Next
			</ButtonLink>
		</div>
		<div css={spacer}>
			<ButtonLink
				iconSide="left"
				icon={<SvgIndent />}
				onClick={() => console.log('Clicked')}
			>
				Indent
			</ButtonLink>
		</div>
		<div css={spacer}>
			<ButtonLink
				icon={<SvgExternal />}
				subdued={true}
				onClick={() => console.log('Clicked')}
			>
				Terms and conditions
			</ButtonLink>
		</div>
		<div css={[flexStart, spacer]}>
			<ButtonLink
				icon={<SvgChevronLeftSingle />}
				subdued={true}
				onClick={() => console.log('Clicked')}
			>
				Previous
			</ButtonLink>
			<ButtonLink
				iconSide="right"
				icon={<SvgArrowRightStraight />}
				subdued={true}
				onClick={() => console.log('Clicked')}
			>
				Next
			</ButtonLink>
		</div>
		<div css={spacer}>
			<ButtonLink
				iconSide="left"
				icon={<SvgIndent />}
				subdued={true}
				onClick={() => console.log('Clicked')}
			>
				Indent
			</ButtonLink>
		</div>
	</>
);
textAndIconButtonLinks.story = {
	name: 'text and icon button links',
};
