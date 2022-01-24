import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { ReactNode } from 'react';
import { labelText, labelTextWithSupportingText } from './styles';

export const LabelText = ({
	hasSupportingText,
	children,
}: {
	hasSupportingText?: boolean;
	children: ReactNode;
}): EmotionJSX.Element => {
	return (
		<div
			css={(theme) => [
				labelText(theme.checkbox),
				hasSupportingText ? labelTextWithSupportingText : '',
			]}
		>
			{children}
		</div>
	);
};
