// This file re-exports imports from `@guardian/source-foundations` or `@guardian/src-foundations`
// to account for the difference between the old and new way during migration
// It will be removed once migration is complete.

export {
	visuallyHidden as _visuallyHidden,
	resets,
	textSans,
} from '@guardian/source-foundations';
export { labelDefault } from './theme';
