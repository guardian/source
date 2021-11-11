import type { Props } from '@guardian/src-helpers';

export interface SummaryProps extends Props {
	/**
	 * The main message of the component
	 * e.g. the main error message, success message etc.
	 */
	message: React.ReactNode;
	/**
	 * Optional context information about the message
	 */
	context?: React.ReactNode;
}

export type { ErrorSummaryProps } from './ErrorSummary';
export { ErrorSummary } from './ErrorSummary';
export type { SuccessSummaryProps } from './SuccessSummary';
export { SuccessSummary } from './SuccessSummary';
export type { InfoSummaryProps } from './InfoSummary';
export { InfoSummary } from './InfoSummary';
