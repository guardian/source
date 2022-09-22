import { transform } from 'lightningcss';
import { focusHalo, focusHaloSpaced } from './focus-halo';
import { visuallyHidden } from './visually-hidden';

it('should provide valid CSS for focusHalo', () => {
	expect(() =>
		transform({
			code: Buffer.from(
				`* {
					${focusHalo}
				}`,
				'utf8',
			),
			filename: '',
		}),
	).not.toThrowError();
});

it('should provide valid CSS for focusHaloSpaced', () => {
	expect(() =>
		transform({
			code: Buffer.from(
				`* {
					${focusHaloSpaced}
				}`,
				'utf8',
			),
			filename: '',
		}),
	).not.toThrowError();
});

it('should provide valid CSS for visuallyHidden', () => {
	expect(() =>
		transform({
			code: Buffer.from(
				`* {
					${visuallyHidden}
				}`,
				'utf8',
			),
			filename: '',
		}),
	).not.toThrowError();
});
