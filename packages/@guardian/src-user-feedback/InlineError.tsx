///<reference types="@guardian/src-foundations/types/themes" />
import { SvgAlertTriangle } from '@guardian/src-icons';
import { inlineError } from './styles';
import { UserFeedbackProps } from './types';

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-user-feedback-inlineerror--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/108ed3-user-feedback/b/3803b4) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/%40guardian/src-user-feedback) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-user-feedback)
 *
 * Used to inform the user when a validation has failed or user error has occurred. These messages indicate what went wrong and how to fix it.
 *
 * The following themes are supported: `default`, `brand`
 */
export const InlineError = ({
	children,
	cssOverrides,
	...props
}: UserFeedbackProps) => (
	<span
		css={(theme) => [inlineError(theme.userFeedback), cssOverrides]}
		{...props}
	>
		<SvgAlertTriangle />
		{children}
	</span>
);
