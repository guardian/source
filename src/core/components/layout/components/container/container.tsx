import { HTMLAttributes, ReactNode } from 'react';
import { SerializedStyles } from '@emotion/react';
import {
	container,
	containerSideBorders,
	containerTopBorder,
	containerBackground,
} from './styles';
import { Props } from '@guardian/src-helpers';
import { border as borderPalette } from '@guardian/src-foundations/palette';

interface Container extends HTMLAttributes<HTMLDivElement>, Props {
	border?: boolean; // TODO: Deprecated. Please use `sideBorders` instead
	sideBorders?: boolean;
	topBorder?: boolean;
	backgroundColor?: string;
	borderColor?: string;
	cssOverrides?: SerializedStyles | SerializedStyles[];
	children: ReactNode;
}

const Container = ({
	border = false,
	sideBorders = false,
	topBorder = false,
	backgroundColor,
	borderColor = borderPalette.secondary,
	cssOverrides,
	children,
	...props
}: Container) => {
	return (
		<section
			css={[backgroundColor && containerBackground(backgroundColor)]}
		>
			<div
				css={[
					container,
					backgroundColor && containerBackground(backgroundColor),
					topBorder && containerTopBorder(borderColor),
					(sideBorders || border) && containerSideBorders(borderColor),
					cssOverrides,
				]}
				{...props}
			>
				{children}
			</div>
		</section>
	);
};
const defaultProps = {};

Container.defaultProps = { ...defaultProps };

export { Container };
