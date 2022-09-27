import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { SvgAlertTriangle } from '../../vendor/icons/SvgAlertTriangle';
import type { Theme } from '../@types/Theme';
import { inlineError } from './styles';
import type { UserFeedbackProps } from './types';

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-inlineerror--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/108ed3-user-feedback/b/3803b4) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/user-feedback/InlineError.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components-feedback)
 *
 * Used to inform the user when a validation has failed or user error has occurred. These messages indicate what went wrong and how to fix it.
 *
 * The following themes are supported: `default`, `brand`
 */
export const InlineError = ({
	children,
	cssOverrides,
	...props
}: UserFeedbackProps): EmotionJSX.Element => (
	<span
		css={(theme: Theme) => [inlineError(theme.userFeedback), cssOverrides]}
		role="alert"
		{...props}
	>
		<SvgAlertTriangle />
		{children}
	</span>
);
