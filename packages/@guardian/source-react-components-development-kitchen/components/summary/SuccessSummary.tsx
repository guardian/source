import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { success as successColors } from '@guardian/src-foundations';
import type { Props } from '@guardian/src-helpers';
import { SvgTickRound } from '@guardian/src-icons';
import {
	contextStyles,
	iconStyles,
	messageStyles,
	messageWrapperStyles,
	wrapperStyles,
} from './styles';

export interface SuccessSummaryProps extends Props {
	/**
	 * The main success message
	 */
	success: string;
	/**
	 * Optional context information about the success
	 */
	context?: string;
}

export const SuccessSummary = ({
	success,
	context,
	cssOverrides,
	...props
}: SuccessSummaryProps): EmotionJSX.Element => (
	<div css={[wrapperStyles(successColors[400]), cssOverrides]} {...props}>
		<div css={iconStyles(successColors[400])}>
			<SvgTickRound />
		</div>
		<div css={messageWrapperStyles}>
			<div css={messageStyles(successColors[400])}>{success}</div>
			{context && <div css={contextStyles}>{context}</div>}
		</div>
	</div>
);
