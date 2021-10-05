import { css } from '@emotion/react';
import { visuallyHidden as _visuallyHidden } from '@guardian/source-foundations';
import type { LabelProps } from './Label';
import { labelText, optionalText } from './styles';

const visuallyHidden = css`
	${_visuallyHidden}
`;

export const Text = ({ text, optional, hideLabel }: LabelProps) => (
	<div
		css={(theme) => [
			labelText(theme.label && theme),
			hideLabel ? visuallyHidden : '',
		]}
	>
		{text}{' '}
		{optional ? (
			<span css={(theme) => optionalText(theme.label && theme)}>
				Optional
			</span>
		) : (
			''
		)}
	</div>
);
