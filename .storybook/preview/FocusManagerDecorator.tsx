import React, { useEffect } from 'react';
import { FocusStyleManager } from '@guardian/src-foundations/utils';

export const FocusManagerDecorator = (storyFn) => {
	useEffect(() => {
		FocusStyleManager.onlyShowFocusOnTabs();
	});

	return <>{storyFn()}</>;
};
