import type { ReactNode } from 'react';
import { supportingText } from './styles';

export const SupportingText = ({ children }: { children: ReactNode }) => {
	return (
		<div css={(theme) => supportingText(theme.checkbox)}>{children}</div>
	);
};
