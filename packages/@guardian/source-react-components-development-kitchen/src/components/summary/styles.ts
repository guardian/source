import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { space } from '@guardian/src-foundations';
import { size } from '@guardian/src-foundations/size';
import { textSans } from '@guardian/src-foundations/typography';

export const wrapperStyles = (color: string): SerializedStyles => css`
	border: 4px solid ${color};
	padding: ${space[1]}px;

	display: flex;
`;

export const iconStyles = (color: string): SerializedStyles => css`
	display: flex;
	flex: 0 1 auto;
	margin-top: 1px;
	svg {
		fill: ${color};
		height: ${size.xsmall}px;
		width: ${size.xsmall}px;
	}
`;

export const messageStyles = (color: string): SerializedStyles => css`
	${textSans.medium({ fontWeight: 'bold' })}
	color: ${color};
`;

export const messageWrapperStyles = css`
	margin-left: ${space[1]}px;
`;

export const contextStyles = css`
	${textSans.medium()}
`;
