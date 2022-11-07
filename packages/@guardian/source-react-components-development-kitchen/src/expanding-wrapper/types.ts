import type { ReactNode } from 'react';

export interface ExpandingWrapperProps {
	children: ReactNode;
	contentsLabel?: string;
	renderExtra?: () => ReactNode;
}
