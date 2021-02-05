import React from "react";
import { css } from "@emotion/react";
import {
	SvgArrowRightStraight,
	SvgIndent,
	SvgExternal,
	SvgChevronLeftSingle,
} from "@guardian/src-icons";
import { space } from "@guardian/src-foundations";
import { Link } from "../index";

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

export const textAndIcon = () => (
	<>
		<div css={spacer}>
			<Link icon={<SvgExternal />} href="#">
				Terms and conditions
			</Link>
		</div>
		<div css={[flexStart, spacer]}>
			<Link icon={<SvgChevronLeftSingle />} href="#">
				Previous
			</Link>
			<Link iconSide="right" icon={<SvgArrowRightStraight />} href="#">
				Next
			</Link>
		</div>
		<div css={spacer}>
			<Link iconSide="left" icon={<SvgIndent />} href="#">
				Indent
			</Link>
		</div>
		<div css={spacer}>
			<Link icon={<SvgExternal />} subdued={true} href="#">
				Terms and conditions
			</Link>
		</div>
		<div css={[flexStart, spacer]}>
			<Link icon={<SvgChevronLeftSingle />} subdued={true} href="#">
				Previous
			</Link>
			<Link
				iconSide="right"
				icon={<SvgArrowRightStraight />}
				subdued={true}
				href="#"
			>
				Next
			</Link>
		</div>
		<div css={spacer}>
			<Link iconSide="left" icon={<SvgIndent />} subdued={true} href="#">
				Indent
			</Link>
		</div>
	</>
);
textAndIcon.story = {
	name: "text and icon links",
};
