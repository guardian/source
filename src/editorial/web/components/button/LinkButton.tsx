import { Format } from '@guardian/types';
import {
	LinkButton as CoreLinkButton,
	LinkButtonProps as CoreLinkButtonProps,
} from '@guardian/src-button';
import {
	decideBackground,
	decideBorder,
	decideFont,
	defaultFormat,
} from './styles';

export interface LinkButtonProps extends CoreLinkButtonProps {
	/**
	 * A format object denoting the style of the button using the enums
	 * available from [@guardian/libs](https://github.com/guardian/libs/blob/main/src/format.ts).
	 *
	 * For example:
	 *
	 * ```ts
	 * {
	 *   display: Display.Standard,
	 *   design: Design.Article,
	 *   theme: Pillar.News,
	 * }
	 * ```
	 */
	format?: Format;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/editorial-src-ed-button-link-button--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/435225-button) •
 * [GitHub](https://github.com/guardian/source/tree/main/src/editorial/web/components/button) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-ed-button)
 *
 * This is the editorial version of the core Button coomponent.
 * This editorial version requires the format prop and uses that to override Button styles based on `format.theme`
 *
 */
export const LinkButton = ({
	format = defaultFormat,
	children,
	priority = 'primary',
	...props
}: LinkButtonProps) => {
	const backgroundOverrides = decideBackground(format, priority);
	const borderOverrides = decideBorder(format, priority);
	const fontOverrides = decideFont(format, priority);

	return (
		<CoreLinkButton
			priority={priority}
			cssOverrides={[backgroundOverrides, borderOverrides, fontOverrides]}
			{...props}
		>
			{children}
		</CoreLinkButton>
	);
};
