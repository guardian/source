import type { Breakpoint } from '../breakpoints/breakpoints';
import { breakpoints } from '../breakpoints/breakpoints';
import { between, from, until } from './mq';

it('from should return a min-width media query', () => {
	const min: Breakpoint = 'mobile';

	expect(from[min]).toBe(`@media (min-width: ${`${breakpoints[min]}px`})`);
});

it('until should return a max-width media query', () => {
	const max: Breakpoint = 'wide';

	expect(until[max]).toBe(`@media (max-width: ${`${breakpoints[max] - 1}px`})`);
});

it('between should return a media query with min- and max-width', () => {
	const min: Breakpoint = 'tablet';
	const max: Breakpoint = 'desktop';

	expect(between[min].and[max]).toBe(
		`@media (min-width: ${`${breakpoints[min]}px`}) and (max-width: ${`${
			breakpoints[max] - 1
		}px`})`,
	);
});
