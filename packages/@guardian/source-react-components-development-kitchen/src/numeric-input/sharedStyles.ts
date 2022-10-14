import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { height, resets, space, textSans } from '@guardian/source-foundations';
import { textInputThemeDefault } from '@guardian/source-react-components';

export const inputBase = (
	textInput = textInputThemeDefault.textInput,
): SerializedStyles =>
	css`
		${resets.input};
		/* Remove default border radius applied by iOS Safari */
		border-radius: 0px;
		box-sizing: border-box;
		height: ${height.inputMedium}px;
		${textSans.medium()};
		color: ${textInput.textUserInput};
		background-color: ${textInput.backgroundInput};
		border: 2px solid ${textInput.border};
		padding: 0 ${space[2]}px;
	`;
