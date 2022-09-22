import { resets } from './resets';

it('should provide valid CSS for resets.defaults', () => {
	expect(resets.defaults).toBeValidCSS();
});

it('should provide valid CSS for resets.fieldset', () => {
	expect(resets.fieldset).toBeValidCSS({ isFragment: true });
});

it('should provide SCSS for resets.input', () => {
	// We add a test here so we don't forget to add/update a test
	// when this is converted to CSS in the future.
	expect(resets.input).not.toBeValidCSS({ isFragment: true });
});

it('should provide valid CSS for resets.legend', () => {
	expect(resets.legend).toBeValidCSS({ isFragment: true });
});

it('should provide valid CSS for resets.resetCSS', () => {
	expect(resets.resetCSS).toBeValidCSS();
});
