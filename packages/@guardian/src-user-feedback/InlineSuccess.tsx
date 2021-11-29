///<reference types="@guardian/src-foundations/types/themes" />
import { SvgTickRound } from '@guardian/src-icons';
import { inlineSuccess } from './styles';
import { UserFeedbackProps } from './types';

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-user-feedback-inlinesuccess--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/108ed3-user-feedback/b/3803b4) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/%40guardian/src-user-feedback) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-user-feedback)
 *
 * Success messages acknowledge a user's action and do not require further action. They inform the user of processes happening in the background. For example, "Your account details have been saved."
 *
 * The following themes are supported: `default`, `brand`
 */
export const InlineSuccess = ({
	children,
	cssOverrides,
	...props
}: UserFeedbackProps) => (
	<span
		css={(theme) => [inlineSuccess(theme.userFeedback), cssOverrides]}
		{...props}
	>
		<SvgTickRound />
		{children}
	</span>
);
