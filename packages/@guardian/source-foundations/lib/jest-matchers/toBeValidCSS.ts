import type { Warning } from 'lightningcss';
import { transform } from 'lightningcss';

type ToBeValidCSSOptions = {
	/**
	 * Set this to true if the CSS is a fragment (e.g. not wrapped in a selector and valid on its own)
	 */
	isFragment?: boolean;
};

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace -- we extend the jest matchers interface like this
	namespace jest {
		interface Matchers<R> {
			toBeValidCSS(options?: ToBeValidCSSOptions): R;
		}
	}
}

expect.extend({
	/**
	 * Uses the lightningcss library to validate given CSS
	 *
	 * @param received - The CSS to validate
	 * @param options - Specify whether the CSS provided is a fragment (not wrapped in a selector)
	 */
	toBeValidCSS(
		received: string,
		options: ToBeValidCSSOptions = {},
	): jest.CustomMatcherResult {
		const { isFragment = false } = options;

		// We wrap the CSS in a selector if it is a fragment to ensure it is valid.
		const finalCSS = isFragment ? `* { ${received} }` : received;

		try {
			transform({
				code: Buffer.from(finalCSS, 'utf8'),
				filename: '',
			});

			return {
				pass: true,
				message: () => '',
			};
		} catch (error) {
			const message = (error as Warning).message;
			if (!message) throw error;
			return {
				pass: false,
				message: () => message,
			};
		}
	},
});
