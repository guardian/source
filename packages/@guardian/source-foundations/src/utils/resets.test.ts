import { resets } from './resets';

test('resets.defaults should be valid CSS', () => {
	expect(resets.defaults).toBeValidCSS();
});

test('resets.fieldset should be a valid CSS fragment', () => {
	expect(resets.fieldset).toBeValidCSS({ isFragment: true });
});

test('resets.input should be an invalid CSS fragment', () => {
	// We add a test here so we don't forget to add/update a test
	// when this is converted to CSS in the future.
	expect(resets.input).not.toBeValidCSS({ isFragment: true });
});

test('resets.legend should be a valid CSS fragment', () => {
	expect(resets.legend).toBeValidCSS({ isFragment: true });
});

test('resets.resetCSS should be valid CSS', () => {
	expect(resets.resetCSS).toBeValidCSS();
});
