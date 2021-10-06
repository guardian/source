// This file re-exports imports that come from different locations in the old and new
// way of doing things. e.g. `@guardian/source-foundations` vs `@guardian/src-foundations`
// It will be removed once migration is complete.

export {
	visuallyHidden as _visuallyHidden,
	resets,
	textSans,
} from '@guardian/source-foundations';
export { labelDefault } from './theme';
