import { css } from '@emotion/react';
import {
	from,
	neutral,
	remHeight,
	remSpace,
	space,
	textSans,
} from '@guardian/source-foundations';

export const containerStyles = css`
	border-top: 1px solid ${neutral[86]};
	background: ${neutral[97]};
	box-shadow: none;
	position: relative;
	margin-bottom: ${space[9]}px;

	#expander-checkbox ~ label::after {
		content: 'Show more';
	}
	#expander-checkbox:checked ~ label::after {
		content: 'Show less';
	}

	#expander-checkbox:checked ~ #expander-overlay,
	#expander-checkbox ~ label #svgminus,
	#expander-checkbox:checked ~ label #svgplus {
		display: none;
	}

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

	#expander-checkbox ~ label #svgplus,
	#expander-checkbox:checked ~ label #svgminus {
		display: block;
	}

	#expander-checkbox:checked ~ #collapsible-body {
		max-height: fit-content;
		margin-bottom: ${remSpace[6]};
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
	margin-left: ${remSpace[1]};
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

	${from.tablet} {
		margin-left: 3.75rem;
	}
`;

export const collapsibleBodyStyles = css`
	margin: 0;
	max-height: 25vh;
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
