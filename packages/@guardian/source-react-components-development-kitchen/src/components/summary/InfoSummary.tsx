import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { brand as brandColors, text } from '@guardian/src-foundations';
import { SvgInfo } from '@guardian/src-icons';
import {
	contextStyles,
	iconStyles,
	messageStyles,
	messageWrapperStyles,
	wrapperStyles,
} from './styles';
import type { SummaryProps } from '.';

export type InfoSummaryProps = SummaryProps;

export const InfoSummary = ({
	message,
	context,
	cssOverrides,
	...props
}: InfoSummaryProps): EmotionJSX.Element => (
	<div css={[wrapperStyles(brandColors[500]), cssOverrides]} {...props}>
		<div css={iconStyles(brandColors[500])}>
			<SvgInfo />
		</div>
		<div css={messageWrapperStyles}>
			<div css={messageStyles(text.primary)}>{message}</div>
			{context && <div css={contextStyles}>{context}</div>}
		</div>
	</div>
);
