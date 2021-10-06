// This file re-exports imports that come from different locations in the old and new
// way of doing things. e.g. `@guardian/source-foundations` vs `@guardian/src-foundations`
// It will be removed once migration is complete.

export type {
	Args,
	Story,
} from '../../../../../../lib/@types/storybook-emotion-10-fixes';
