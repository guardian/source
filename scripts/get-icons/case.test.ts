import { kebabToTitle } from './case';

describe('The kebabToTitle function', () => {
	it('returns a TitleCase string from a kebab-case input', () => {
		expect(kebabToTitle('alert-round')).toBe('AlertRound');
	});
});
