import { css } from "@emotion/core";
import { textSans, textSansSizes } from "@guardian/src-foundations/typography";
import { palette } from "@guardian/src-foundations/palette";
import { space } from "@guardian/src-foundations/space";
import { visuallyHidden } from "@guardian/src-foundations/helpers";
import { transitions } from "@guardian/src-foundations/animation";

export const groupStyles = css`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;
export const radioStyles = css`
	${visuallyHidden};

	&:checked + span:after {
		opacity: 1;
		transform: scale(0.6);
	}
`;

export const textStyles = css`
	position: relative;
	${textSans({ level: 3 })};
	color: ${palette.brand.main};

	cursor: pointer;

	&:before {
		box-sizing: border-box;
		display: inline-block;
		width: ${textSansSizes[3]}px;
		height: ${textSansSizes[3]}px;
		margin: 0 ${space.medium} 0 0;
		vertical-align: middle;
		content: "";

		cursor: pointer;
		border: 1px solid ${palette.brand.main};
		border-radius: 50%;
		box-shadow: 0 0 0 3px ${palette.neutrals[100]};
		transition: box-shadow ${transitions.short};
	}

	&:after {
		box-sizing: border-box;
		display: inline-block;
		content: "";
		width: ${textSansSizes[3]}px;
		height: ${textSansSizes[3]}px;
		position: absolute;
		top: 2px; /* a magic number I can't make sense of right now! */
		left: 0;
		bottom: 0;
		margin: auto;
		border: 1px solid transparent;

		background: ${palette.brand.main};
		border-radius: 50%;
		transform: scale(0.1);
		opacity: 0;
		transition: transform ${transitions.short}, opacity ${transitions.short};
	}

	&:hover {
		&:before {
			box-shadow: 0 0 0 3px ${palette.neutrals[86]};
		}
	}
`;
