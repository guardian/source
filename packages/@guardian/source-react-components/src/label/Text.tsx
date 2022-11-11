import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { visuallyHidden as _visuallyHidden } from '@guardian/source-foundations';
import type { Theme } from '../@types/Theme';
import { labelText, optionalText } from './styles';
import type { LabelProps } from './types';

const visuallyHidden = css`
	${_visuallyHidden}
`;

export const Text = ({
	text,
	optional,
	hideLabel,
	supportDarkMode = false,
}: LabelProps): EmotionJSX.Element => (
	<div
		css={(theme: Theme) => [
			labelText(supportDarkMode, theme.label),
			hideLabel ? visuallyHidden : '',
		]}
	>
		{text}{' '}
		{optional ? (
			<span css={(theme: Theme) => optionalText(supportDarkMode, theme.label)}>
				Optional
			</span>
		) : (
			''
		)}
	</div>
);
