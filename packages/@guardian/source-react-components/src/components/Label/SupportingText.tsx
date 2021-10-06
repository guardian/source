import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { ReactNode } from 'react';
import { supportingText, visuallyHidden } from './styles';

export const SupportingText = ({
	hideLabel,
	children,
}: {
	hideLabel?: boolean;
	children: ReactNode;
}): EmotionJSX.Element => {
	return (
		<p
			css={(theme) => [
				supportingText(theme.label && theme),
				hideLabel ? visuallyHidden : '',
			]}
		>
			{children}
		</p>
	);
};
