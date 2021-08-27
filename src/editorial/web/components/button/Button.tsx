import { Format } from '@guardian/types';
import {
	Button as CoreButton,
	ButtonProps as CoreButtonProps,
} from '@guardian/src-button';
import {
	decideBackground,
	decideBorder,
	decideFont,
	defaultFormat,
} from './styles';

export interface ButtonProps extends CoreButtonProps {
	format?: Format;
}

export const Button = ({
	format = defaultFormat,
	children,
	priority = 'primary',
	...props
}: ButtonProps) => {
	const backgroundOverrides = decideBackground(format, priority);
	const borderOverrides = decideBorder(format, priority);
	const fontOverrides = decideFont(format, priority);

	return (
		<CoreButton
			priority={priority}
			cssOverrides={[backgroundOverrides, borderOverrides, fontOverrides]}
			{...props}
		>
			{children}
		</CoreButton>
	);
};
