import { SvgAlertTriangle } from '@guardian/src-icons';
import type { Props } from '@guardian/src-helpers';
import {
	wrapperStyles,
	iconStyles,
	messageWrapperStyles,
	messageStyles,
	contextStyles,
} from './styles';
import { error as errorColors } from '@guardian/src-foundations';

export interface ErrorSummaryProps extends Props {
	/**
	 * The main error message
	 */
	error: string;
	/**
	 * Optional context information about the error
	 */
	context?: string;
}

export const ErrorSummary = ({
	error,
	context,
	cssOverrides,
	...props
}: ErrorSummaryProps) => (
	<div css={[wrapperStyles(errorColors[400]), cssOverrides]} {...props}>
		<div css={iconStyles(errorColors[400])}>
			<SvgAlertTriangle />
		</div>
		<div css={messageWrapperStyles}>
			<div css={messageStyles(errorColors[400])}>{error}</div>
			{context && <div css={contextStyles}>{context}</div>}
		</div>
	</div>
);
