import { css } from '@emotion/react';
import { space } from '@guardian/source-foundations';
import { textInputThemeDefault } from '@guardian/source-react-components';
import { textInput } from './styles';

export const inputExtension = (input = textInputThemeDefault.textInput) => css`
	${textInput(input)}
	display: inline-flex;
	align-items: center;
`;

export const inputPrefix = css`
	padding-right: ${space[1]}px;
	border-right: none;
`;

export const inputSuffix = css`
	padding-left: ${space[1]}px;
	border-left: none;
`;
