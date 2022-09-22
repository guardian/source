import { transform } from 'lightningcss';
import { resets } from './resets';

it('should provide valid CSS for resets.defaults', () => {
	expect(() =>
		transform({ code: Buffer.from(resets.defaults, 'utf8'), filename: '' }),
	).not.toThrowError();
});

it('should provide valid CSS for resets.fieldset', () => {
	expect(() =>
		transform({
			code: Buffer.from(
				`* {
					${resets.fieldset}
				}`,
				'utf8',
			),
			filename: '',
		}),
	).not.toThrowError();
});

it('should provide SCSS for resets.input', () => {
	expect(() =>
		transform({
			code: Buffer.from(
				`* {
					${resets.input}
				}`,
				'utf8',
			),
			filename: '',
		}),
	).toThrowError();
});

it('should provide valid CSS for resets.legend', () => {
	expect(() =>
		transform({
			code: Buffer.from(
				`* {
					${resets.legend}
				}`,
				'utf8',
			),
			filename: '',
		}),
	).not.toThrowError();
});

it('should provide valid CSS for resets.resetCSS', () => {
	expect(() =>
		transform({ code: Buffer.from(resets.resetCSS, 'utf8'), filename: '' }),
	).not.toThrowError();
});
