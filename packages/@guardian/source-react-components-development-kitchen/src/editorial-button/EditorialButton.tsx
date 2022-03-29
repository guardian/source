import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { ButtonProps as CoreButtonProps } from '@guardian/source-react-components';
import { Button as CoreButton } from '@guardian/source-react-components';
import {
	decideBackground,
	decideBorder,
	decideFont,
	defaultFormat,
} from './styles';
import type { SharedEditorialButtonProps } from './types';

export interface EditorialButtonProps
	extends CoreButtonProps,
		SharedEditorialButtonProps {}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-development-kitchen-editorialbutton--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/435225-button) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components-development-kitchen/components/editorial-button) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components-development-kitchen)
 *
 * This is the editorial version of the core Button coomponent.
 * This editorial version requires the format prop and uses that to override Button styles based on `format.theme`
 *
 */
export const EditorialButton = ({
	format = defaultFormat,
	children,
	priority = 'primary',
	...props
}: EditorialButtonProps): EmotionJSX.Element => {
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
