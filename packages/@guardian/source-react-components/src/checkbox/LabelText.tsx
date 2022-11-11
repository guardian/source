import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { ReactNode } from 'react';
import type { Theme } from '../@types/Theme';
import { labelText, labelTextWithSupportingText } from './styles';

export const LabelText = ({
	hasSupportingText,
	children,
	supportDarkMode = false,
}: {
	hasSupportingText?: boolean;
	children: ReactNode;
	supportDarkMode?: boolean;
}): EmotionJSX.Element => {
	return (
		<div
			css={(theme: Theme) => [
				labelText(supportDarkMode, theme.checkbox),
				hasSupportingText ? labelTextWithSupportingText : '',
			]}
		>
			{children}
		</div>
	);
};
