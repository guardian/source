import { deduplicateComponents } from './deduplicate-components';

describe('The deduplicateComponents function', () => {
	it('combines components from src-* and source-react-components', () => {
		expect(
			deduplicateComponents([
				'@guardian/src-button/Button',
				'@guardian/source-react-components/Button',
			]),
		).toEqual([
			'@guardian/src-button/Button | @guardian/source-react-components/Button',
		]);
	});

	it('combines components from src-ed-* and source-react-components-development-kitchen', () => {
		expect(
			deduplicateComponents([
				'@guardian/src-ed-quote-icon/QuoteIcon',
				'@guardian/source-react-components-development-kitchen/QuoteIcon',
			]),
		).toEqual([
			'@guardian/src-ed-quote-icon/QuoteIcon | @guardian/source-react-components-development-kitchen/QuoteIcon',
		]);
	});

	it('combines components that have changed namefrom src-ed-* and source-react-components-development-kitchen', () => {
		expect(
			deduplicateComponents([
				'@guardian/src-ed-button/Button',
				'@guardian/source-react-components-development-kitchen/EditorialButton',
			]),
		).toEqual([
			'@guardian/src-ed-button/Button | @guardian/source-react-components-development-kitchen/EditorialButton',
		]);
	});

	it('does not combine components from src-ed-* and source-react-components', () => {
		expect(
			deduplicateComponents([
				'@guardian/src-ed-button/Button',
				'@guardian/source-react-components/Button',
			]),
		).toEqual([
			'@guardian/src-ed-button/Button',
			'@guardian/source-react-components/Button',
		]);
	});

	it('does not combine components from src-* and src-ed-*', () => {
		expect(
			deduplicateComponents([
				'@guardian/src-button/Button',
				'@guardian/src-ed-button/Button',
			]),
		).toEqual([
			'@guardian/src-button/Button',
			'@guardian/src-ed-button/Button',
		]);
	});

	it('handles multiple entries', () => {
		expect(
			deduplicateComponents([
				'@guardian/src-button/Button',
				'@guardian/source-react-components/Button',
				'@guardian/src-link/Link',
				'@guardian/source-react-components/Link',
			]),
		).toEqual([
			'@guardian/src-button/Button | @guardian/source-react-components/Button',
			'@guardian/src-link/Link | @guardian/source-react-components/Link',
		]);
	});

	it('handles unmatched components', () => {
		expect(
			deduplicateComponents([
				'@guardian/src-button/Button',
				'@guardian/source-react-components/Button',
				'@guardian/source-react-components/Test',
			]),
		).toEqual([
			'@guardian/src-button/Button | @guardian/source-react-components/Button',
			'@guardian/source-react-components/Test',
		]);
	});
});
