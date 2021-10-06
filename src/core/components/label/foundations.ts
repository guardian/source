// This file re-exports imports from `@guardian/source-foundations` or `@guardian/src-foundations`
// to account for the difference between the old and new way during migration
// It will be removed once migration is complete.

export { textSans } from '@guardian/src-foundations/typography';
export { labelDefault } from '@guardian/src-foundations/themes';
export { resets } from '@guardian/src-foundations/utils';
export { visuallyHidden as _visuallyHidden } from '@guardian/src-foundations/accessibility';
