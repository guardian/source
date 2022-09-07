import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { ReactNode } from 'react';
import { supportingText } from './styles';

export const SupportingText = ({
	children,
}: {
	children: ReactNode;
}): EmotionJSX.Element => {
	return <div css={(theme) => supportingText(theme.checkbox)}>{children}</div>;
};
