import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { remHeight, remWidth, textSans } from '@guardian/source-foundations';
import { userFeedbackThemeDefault } from './theme';

const inlineMessage = css`
	display: flex;
	align-items: flex-start;
	${textSans.medium()};

	svg {
		fill: currentColor;
		/* we don't want the SVG to change size depending on available space */
		flex: none;
		width: ${remWidth.iconMedium}rem;
		height: ${remHeight.iconMedium}rem;

		/*
		a visual kick to vertically align the icon with the top row of text
		and horizontally pull it to the beginning of the row
		 */
		transform: translate(-4px, -3px);
	}
`;

export const inlineError = (
	userFeedback = userFeedbackThemeDefault.userFeedback,
): SerializedStyles => css`
	${inlineMessage};
	color: ${userFeedback.textError};
`;

export const inlineSuccess = (
	userFeedback = userFeedbackThemeDefault.userFeedback,
): SerializedStyles => css`
	${inlineMessage};
	color: ${userFeedback.textSuccess};
`;
