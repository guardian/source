import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { ReactNode } from 'react';
import type { Theme } from '../@types/Theme';
import { supportingText } from './styles';

export const SupportingText = ({
	children,
}: {
	children: ReactNode;
}): EmotionJSX.Element => {
	return (
		<div css={(theme: Theme) => supportingText(theme.checkbox)}>{children}</div>
	);
};
