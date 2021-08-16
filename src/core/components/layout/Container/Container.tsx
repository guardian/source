import { Props } from '@guardian/src-helpers';
import { HTMLAttributes } from 'react';
import {
	container,
	containerBackground,
	containerBorderColor,
	containerSideBorders,
	containerTopBorder,
} from './styles';

	border?: boolean; // TODO: Deprecated. Please use `sideBorders` instead
export interface ContainerProps extends HTMLAttributes<HTMLElement>, Props {
	sideBorders?: boolean;
	topBorder?: boolean;
	backgroundColor?: string;
	borderColor?: string;
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
}: ContainerProps) => {
	return (
		<section
			css={[
				backgroundColor && containerBackground(backgroundColor),
				cssOverrides,
			]}
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
