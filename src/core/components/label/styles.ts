// This file is NOT symlinked with packages/@guardian/source-react-components/src/components/label/styles.ts
// as that imports from @guardian/source-foundations but here we need to use @guardian/src-foundations

import { css } from '@emotion/react';
import { textSans } from '@guardian/src-foundations/typography';
import { labelDefault } from '@guardian/src-foundations/themes';
import { resets } from '@guardian/src-foundations/utils';
import { visuallyHidden as _visuallyHidden } from '@guardian/src-foundations/accessibility';

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
	margin: 2px 0 0;
`;

export const visuallyHidden = css`
	${_visuallyHidden}
`;
