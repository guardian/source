import { focusHalo, focusHaloSpaced } from './focus-halo';
import { visuallyHidden } from './visually-hidden';

test('focusHalo should be a valid CSS fragment', () => {
	expect(focusHalo).toBeValidCSS({ isFragment: true });
});

test('focusHaloSpaced should be a valid CSS fragment', () => {
	expect(focusHaloSpaced).toBeValidCSS({ isFragment: true });
});

test('visuallyHidden should be a valid CSS fragment', () => {
	expect(visuallyHidden).toBeValidCSS({ isFragment: true });
});
