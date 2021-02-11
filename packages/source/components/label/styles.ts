import { css } from '@emotion/react';
import { textSans } from '../../foundations/src/typography';
import { labelDefault } from '../../foundations/src/themes';
import { resets } from '../../foundations/src/utils';

export const legend = css`
	${resets.legend};
`;

export const labelText = ({ label } = labelDefault) => css`
	${textSans.medium({ fontWeight: 'bold', lineHeight: 'regular' })};
	color: ${label.textLabel};
`;

export const optionalText = ({ label } = labelDefault) => css`
	${textSans.small({ lineHeight: 'regular' })};
	color: ${label.textOptional};
	font-style: italic;
`;

export const supportingText = ({ label } = labelDefault) => css`
	${textSans.small({ lineHeight: 'regular' })};
	color: ${label.textSupporting};
	margin: 0;
`;
