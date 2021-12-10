import type { HTMLAttributes, ReactNode } from 'react';
import { Props } from '../@types/Props';

export interface UserFeedbackProps
	extends Props,
		HTMLAttributes<HTMLSpanElement> {
	children: ReactNode;
}
