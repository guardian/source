import { HTMLAttributes, ReactNode } from 'react';
import { SerializedStyles } from '@emotion/react';
import {
	container,
	containerSideBorders,
	containerTopBorder,
	containerBorderColor,
	containerBackground,
} from './styles';
import { Props } from '@guardian/src-helpers';
import { border as borderPalette } from '@guardian/src-foundations/palette';

interface Container extends HTMLAttributes<HTMLElement>, Props {
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
	borderColor,
	cssOverrides,
	children,
	...props
}: Container) => {
	return (
		<section
			css={[backgroundColor && containerBackground(backgroundColor), cssOverrides]}
			{...props}
		>
			<div
				css={[
					container,
					backgroundColor && containerBackground(backgroundColor),
					topBorder && containerTopBorder,
					(sideBorders || border) && containerSideBorders,
					borderColor && containerBorderColor(borderColor),
				]}
			>
				{children}
			</div>
		</section>
	);
};
const defaultProps = {};

Container.defaultProps = { ...defaultProps };

export { Container };
