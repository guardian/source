import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { LabelProps } from './Label';
import { labelText, optionalText, visuallyHidden } from './styles';

export const Text = ({
	text,
	optional,
	hideLabel,
}: LabelProps): EmotionJSX.Element => (
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
