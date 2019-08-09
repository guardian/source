import { css } from '@emotion/core';
import { textSans } from '@guardian/src-foundations/typography';
import { palette } from '@guardian/src-foundations/palette';
import { space } from '@guardian/src-foundations/space';
import { fontSizes } from '@guardian/src-foundations/theme';
import { visuallyHidden } from '@guardian/src-foundations/helpers';
import { transitions } from '@guardian/src-foundations/animation';

export const groupStyles = css`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;
export const labelStyles = css`
	position: relative;
	${textSans({ level: 3 })};
	color: ${palette.brand.main};

	cursor: pointer;

	&:before {
		box-sizing: border-box;
		display: inline-block;
		width: ${fontSizes[2]}px;
		height: ${fontSizes[2]}px;
		margin: 0 ${space.medium} 0 0;
		vertical-align: middle;
		content: '';

		cursor: pointer;
		border: 1px solid ${palette.brand.main};
		border-radius: 50%;
		box-shadow: 0 0 0 3px ${palette.neutrals[100]};
		transition: box-shadow ${transitions[0]};
	}

	&:after {
		box-sizing: border-box;
		display: inline-block;
		content: '';
		width: ${fontSizes[2]}px;
		height: ${fontSizes[2]}px;
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
		transition: transform  ${transitions[0]},
					opacity  ${transitions[0]};
	}

	&:hover {
		&:before {
			box-shadow: 0 0 0 3px ${palette.neutrals[86]};
		}
	}
`;
export const radioStyles = css`
	${visuallyHidden};

	&:checked + label:after {
		opacity: 1;
		transform: scale(0.6);
	}
`;
