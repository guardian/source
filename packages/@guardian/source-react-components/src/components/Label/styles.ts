import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';
import {
	visuallyHidden as _visuallyHidden,
	resets,
	textSans,
} from '@guardian/source-foundations';
import { labelDefault } from './theme';

export const legend = css`
	${resets.legend};
`;

export const labelText = ({ label } = labelDefault): SerializedStyles => css`
	${textSans.medium({ fontWeight: 'bold', lineHeight: 'regular' })};
	color: ${label.textLabel};
`;

export const optionalText = ({ label } = labelDefault): SerializedStyles => css`
	${textSans.small({ lineHeight: 'regular' })};
	color: ${label.textOptional};
	font-style: italic;
`;

export const supportingText = ({
	label,
} = labelDefault): SerializedStyles => css`
	${textSans.small({ lineHeight: 'regular' })};
	color: ${label.textSupporting};
	margin: 2px 0 0;
`;

export const visuallyHidden = css`
	${_visuallyHidden}
`;
