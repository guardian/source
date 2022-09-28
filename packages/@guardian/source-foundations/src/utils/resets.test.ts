import { resets } from './resets';

test('resets.defaults should be valid CSS', () => {
	expect(resets.defaults).toBeValidCSS();
});

test('resets.fieldset should be a valid CSS fragment', () => {
	expect(resets.fieldset).toBeValidCSS({ isFragment: true });
});

test('resets.legend should be a valid CSS fragment', () => {
	expect(resets.legend).toBeValidCSS({ isFragment: true });
});

test('resets.resetCSS should be valid CSS', () => {
	expect(resets.resetCSS).toBeValidCSS();
});
