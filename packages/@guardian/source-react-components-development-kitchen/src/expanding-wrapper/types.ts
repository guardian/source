import type { ReactElement } from 'react';

export interface ExpandingWrapperProps {
	children: ReactElement;
	name: string;
	disableTabbingWhenCollapsed?: boolean;
	renderExtra?: () => ReactElement;
	expandCallback?: (expanded: boolean) => void;
}

export type TabbableElementType =
	| HTMLInputElement
	| HTMLTextAreaElement
	| HTMLSelectElement
	| HTMLButtonElement
	| HTMLAnchorElement;
