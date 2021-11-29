import { css } from '@emotion/react';
import { visuallyHidden as _visuallyHidden } from '@guardian/src-foundations/accessibility';
import { LabelProps } from './Label';
import { labelText, optionalText } from './styles';

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
