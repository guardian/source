import { css } from '@emotion/react';
import { visuallyHidden as _visuallyHidden } from '@guardian/source-foundations';
import { labelText, optionalText } from './styles';
import type { LabelProps } from './types';

const visuallyHidden = css`
	${_visuallyHidden}
`;

export const Text = ({ text, optional, hideLabel }: LabelProps) => (
	<div
		css={(theme) => [
			labelText(theme.label),
			hideLabel ? visuallyHidden : '',
		]}
	>
		{text}{' '}
		{optional ? (
			<span css={(theme) => optionalText(theme.label)}>Optional</span>
		) : (
			''
		)}
	</div>
);
