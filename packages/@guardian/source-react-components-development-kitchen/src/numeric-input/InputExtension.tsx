import {
	inputExtension,
	inputPrefix,
	inputSuffix,
} from './inputExtensionStyles';
import type { InputTheme } from './NumericInput';

type InputExtensionProps = {
	children: string;
	type: 'prefix' | 'suffix';
};

export const InputExtension = ({ children, type }: InputExtensionProps) => {
	const style = type === 'prefix' ? inputPrefix : inputSuffix;

	return (
		<span
			aria-hidden="true"
			css={(theme: InputTheme) => [inputExtension(theme.textInput), style]}
		>
			{children}
		</span>
	);
};
