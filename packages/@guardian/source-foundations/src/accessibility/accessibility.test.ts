import { focusHalo, focusHaloSpaced } from './focus-halo';
import { visuallyHidden } from './visually-hidden';

it('should provide valid CSS for focusHalo', () => {
	expect(focusHalo).toBeValidCSS({ isFragment: true });
});

it('should provide valid CSS for focusHaloSpaced', () => {
	expect(focusHaloSpaced).toBeValidCSS({ isFragment: true });
});

it('should provide valid CSS for visuallyHidden', () => {
	expect(visuallyHidden).toBeValidCSS({ isFragment: true });
});
