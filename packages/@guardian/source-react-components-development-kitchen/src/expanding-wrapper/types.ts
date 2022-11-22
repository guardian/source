import type { ReactElement } from 'react';

export interface ExpandingWrapperProps {
	children: ReactElement;
	name: string;
	renderExtra?: () => ReactElement;
	expandCallback?: (expanded: boolean) => void;
}
