import { css, SerializedStyles } from '@emotion/react';
import {
	from,
	neutral,
	remHeight,
	remSpace,
	focusHalo,
	textSans,
} from '@guardian/source-foundations';

export const containerStyles = css`
	border-image: repeating-linear-gradient(
			to bottom,
			${neutral[86]},
			${neutral[86]} 1px,
			transparent 1px,
			transparent 4px
		)
		13;
	border-top: 13px solid ${neutral[86]};
	background: ${neutral[97]};
	box-shadow: none;
	position: relative;
	margin-bottom: ${remSpace[12]};

	#expander-checkbox:checked ~ label {
		background: ${neutral[100]};
		color: ${neutral[7]};

		#svgminus {
			fill: ${neutral[7]};
		}
	}
	#expander-checkbox ~ label #svgplus {
		fill: ${neutral[100]};
	}

	#expander-checkbox:checked ~ #collapsible-body {
		max-height: fit-content;
		margin-bottom: ${remSpace[6]};
	}

	#expander-checkbox:focus ~ #collapsible-body {
		${focusHalo};
	}
`;

export const overlayStyles = css`
	background-image: linear-gradient(
		0deg,
		${neutral[97]},
		${neutral[97]} 40%,
		rgba(255, 255, 255, 0)
	);
	height: 5rem;
	position: absolute;
	bottom: 0;
	width: 100%;
	display: block;
`;
export const showHideLabelStyles = css`
	display: inline-flex;
	justify-content: space-between;
	box-shadow: none;
	align-items: center;
	box-sizing: border-box;
	cursor: pointer;
	position: absolute;
	bottom: -${remSpace[6]};
	border-radius: ${remHeight.ctaMedium}rem;
	padding: 0 ${remSpace[5]};
	border: 1px solid ${neutral[7]};
	text-decoration: none;
	background: ${neutral[7]};
	color: ${neutral[100]};
	height: ${remHeight.ctaMedium}rem;
	min-height: ${remHeight.ctaMedium}rem;
	${textSans.medium({ fontWeight: 'bold' })};
`;

export const collapsibleBodyStyles = css`
	margin: 0;
	max-height: 30vh;
	overflow: hidden;
`;

export const buttonIconStyles = css`
	svg {
		display: block;
		width: 1.5rem;
		height: auto;
		margin-left: -${remSpace[1]};
		margin-right: ${remSpace[1]};
	}
`;

export const extraStyles = css`
	display: flex;
	align-items: center;
	padding: 0 ${remSpace[1]};
	position: absolute;
	right: 0;
	margin-top: -${remSpace[6]};
`;
