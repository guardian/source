import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { error as errorColors } from '@guardian/src-foundations';
import type { Props } from '@guardian/src-helpers';
import { SvgAlertTriangle } from '@guardian/src-icons';
import {
	contextStyles,
	iconStyles,
	messageStyles,
	messageWrapperStyles,
	wrapperStyles,
} from './styles';

export interface ErrorSummaryProps extends Props {
	/**
	 * The main error message
	 */
	error: string;
	/**
	 * The error report link URL
	 */
	errorReportUrl?: string;
	/**
	 * Optional context information about the error
	 */
	context?: React.ReactNode | string;
}

export const ErrorSummary = ({
	error,
	errorReportUrl,
	context,
	cssOverrides,
	...props
}: ErrorSummaryProps): EmotionJSX.Element => (
	<div css={[wrapperStyles(errorColors[400]), cssOverrides]} {...props}>
		<div css={iconStyles(errorColors[400])}>
			<SvgAlertTriangle />
		</div>
		<div css={messageWrapperStyles}>
			<div css={messageStyles(errorColors[400])}>{error}</div>
			{errorReportUrl && (
				<a
					css={messageStyles(errorColors[400], false)}
					href={errorReportUrl}
				>
					Report this error
				</a>
			)}
			{context && <div css={contextStyles}>{context}</div>}
		</div>
	</div>
);
