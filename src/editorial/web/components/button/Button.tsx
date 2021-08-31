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
import { SharedEditorialButtonProps } from './types';

export interface ButtonProps
	extends CoreButtonProps,
		SharedEditorialButtonProps {}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/editorial-src-ed-button-button--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/435225-button) •
 * [GitHub](https://github.com/guardian/source/tree/main/src/editorial/web/components/button) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-ed-button)
 *
 * This is the editorial version of the core Button coomponent.
 * This editorial version requires the format prop and uses that to override Button styles based on `format.theme`
 *
 */
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