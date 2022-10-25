import { useEffect } from 'react';
import { FocusStyleManager } from '@guardian/source-foundations';

export const FocusManagerDecorator = (storyFn) => {
	useEffect(() => {
		FocusStyleManager.onlyShowFocusOnTabs();
	});

	return <>{storyFn()}</>;
};
