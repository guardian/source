///<reference types="@emotion/react/types/css-prop" />
import React, { ReactNode, HTMLAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';
import { SvgAlertTriangle, SvgTickRound } from '../../icons';
import { Props } from '../../helpers';
import { inlineError, inlineSuccess } from './styles';
export {
	userFeedbackDefault,
	userFeedbackBrand,
} from '../../foundations/src/themes';

interface UserFeedbackProps extends Props, HTMLAttributes<HTMLSpanElement> {
	cssOverrides?: SerializedStyles | SerializedStyles[];
	children: ReactNode;
}

const InlineError = ({
	children,
	cssOverrides,
	...props
}: UserFeedbackProps) => (
	<span
		css={(theme) => [
			inlineError(theme.userFeedback && theme),
			cssOverrides,
		]}
		{...props}
	>
		<SvgAlertTriangle />
		{children}
	</span>
);

const InlineSuccess = ({
	children,
	cssOverrides,
	...props
}: UserFeedbackProps) => (
	<span
		css={(theme) => [
			inlineSuccess(theme.userFeedback && theme),
			cssOverrides,
		]}
		{...props}
	>
		<SvgTickRound />
		{children}
	</span>
);

export { InlineError, InlineSuccess };
