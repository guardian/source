import type { HTMLAttributes, ReactNode } from 'react';
import type { Props } from '../@types/types';

export interface UserFeedbackProps
	extends Props,
		HTMLAttributes<HTMLSpanElement> {
	children: ReactNode;
}
