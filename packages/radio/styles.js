import { css } from "@emotion/core";
import { textSans, textSansSizes } from "@guardian/src-foundations/typography";
import { palette } from "@guardian/src-foundations/palette";
import { gutter, rhythm } from "@guardian/src-foundations/space";
import { visuallyHidden } from "@guardian/src-foundations/helpers";
import { transitions } from "@guardian/src-foundations/animation";

export const group = css`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;

export const label = css`
	margin-bottom: ${rhythm.small};
`;

export const radio = css`
	${visuallyHidden};

	&:checked + span:after {
		opacity: 1;
		transform: scale(0.6);
	}
`;

export const text = css`
	position: relative;
	${textSans({ level: 3 })};

	cursor: pointer;

	&:before {
		box-sizing: border-box;
		display: inline-block;
		width: ${textSansSizes[3]}px;
		height: ${textSansSizes[3]}px;
		margin: 0 ${gutter.medium} 0 0;
		vertical-align: middle;
		content: "";

		cursor: pointer;
		border-width: 1px;
		border-style: solid;
		border-radius: 50%;
		box-shadow: 0 0 0 3px transparent;
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
		border-radius: 50%;
		transform: scale(0.1);
		opacity: 0;
		transition: transform ${transitions.short}, opacity ${transitions.short};
	}
`;

export const appearanceLight = css`
	span {
		color: ${palette.brand.main};

		&:before {
			border-color: ${palette.brand.main};
		}

		&:after {
			background: ${palette.brand.main};
		}

		&:hover {
			&:before {
				box-shadow: 0 0 0 3px ${palette.neutrals[86]};
			}
		}
	}
`;
export const appearanceDark = css`
	span {
		color: ${palette.neutrals[100]};

		&:before {
			border-color: ${palette.neutrals[100]};
		}

		&:after {
			background: ${palette.neutrals[100]};
		}

		&:hover {
			&:before {
				box-shadow: 0 0 0 3px ${palette.neutrals[100]};
			}
		}
	}
`;
