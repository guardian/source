import { remSpace, space } from './space';

it('should provide a rem equivalent of the pixel space', () =>
	expect(remSpace[2]).toBe(`${space[2] / 16}rem`));
