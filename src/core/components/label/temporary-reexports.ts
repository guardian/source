// This file re-exports imports that come from different locations in the old and new
// way of doing things. e.g. `@guardian/source-foundations` vs `@guardian/src-foundations`
// It will be removed once migration is complete.

export { textSans } from '@guardian/src-foundations/typography';
export { labelDefault, labelBrand } from '@guardian/src-foundations/themes';
export { resets } from '@guardian/src-foundations/utils';
export { visuallyHidden as _visuallyHidden } from '@guardian/src-foundations/accessibility';
