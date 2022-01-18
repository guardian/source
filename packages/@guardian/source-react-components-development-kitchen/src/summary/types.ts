import type { Props } from '@guardian/source-react-components';

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
