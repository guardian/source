///<reference types="@guardian/src-foundations/types/themes" />
import { ReactNode, HTMLAttributes } from 'react';
import { Props } from '@guardian/src-helpers';

export interface UserFeedbackProps
	extends Props,
		HTMLAttributes<HTMLSpanElement> {
	children: ReactNode;
}
