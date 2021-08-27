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
	format?: Format;
}

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
