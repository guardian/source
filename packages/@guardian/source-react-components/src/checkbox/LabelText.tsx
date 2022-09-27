import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { ReactNode } from 'react';
import type { Theme } from '../@types/Theme';
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
			css={(theme: Theme) => [
				labelText(theme.checkbox),
				hasSupportingText ? labelTextWithSupportingText : '',
			]}
		>
			{children}
		</div>
	);
};
