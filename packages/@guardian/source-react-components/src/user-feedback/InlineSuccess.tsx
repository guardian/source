import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { SvgTickRound } from '../../vendor/icons/SvgTickRound';
import type { Theme } from '../@types/Theme';
import { inlineSuccess } from './styles';
import type { UserFeedbackProps } from './types';

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-inlinesuccess--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/108ed3-user-feedback/b/3803b4) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/user-feedback/InlineSuccess.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Success messages acknowledge a user's action and do not require further action. They inform the user of processes happening in the background. For example, "Your account details have been saved."
 *
 * The following themes are supported: `default`, `brand`
 */
export const InlineSuccess = ({
	children,
	cssOverrides,
	...props
}: UserFeedbackProps): EmotionJSX.Element => (
	<span
		css={(theme: Theme) => [inlineSuccess(theme.userFeedback), cssOverrides]}
		role="alert"
		{...props}
	>
		<SvgTickRound />
		{children}
	</span>
);
