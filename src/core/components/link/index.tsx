import React, {
	ReactElement,
	ReactNode,
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
} from 'react';
import { SerializedStyles } from '@emotion/react';
import { LinkTheme } from '@guardian/src-foundations/themes';
import {
	link,
	buttonLink,
	primary,
	secondary,
	subdued,
	icon,
	iconRight,
	iconLeft,
} from './styles';
import { Props } from '@guardian/src-helpers';

export {
	linkDefault,
	linkBrand,
	linkBrandAlt,
} from '@guardian/src-foundations/themes';

export type LinkPriority = 'primary' | 'secondary';

type IconSide = 'left' | 'right';

const priorities: {
	[key in LinkPriority]: ({ link }: { link: LinkTheme }) => SerializedStyles;
} = {
	primary,
	secondary,
};

const iconSides: {
	[key in IconSide]: SerializedStyles;
} = {
	right: iconRight,
	left: iconLeft,
};

const linkContents = ({
	children,
	iconSvg,
	iconSide,
}: {
	children: ReactNode;
	iconSvg?: ReactElement;
	iconSide: IconSide;
}) => {
	// a bit of underlined space; the icon sits on top
	const spacer = <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>;
	const linkContents = [children];

	if (iconSvg) {
		if (iconSide === 'left') {
			linkContents.unshift(
				spacer,
				React.cloneElement(iconSvg, { key: 'svg' }),
			);
		} else {
			linkContents.push(
				spacer,
				React.cloneElement(iconSvg, { key: 'svg' }),
			);
		}
	}

	return linkContents;
};

const linkStyles = ({
	isButton,
	priority,
	isSubdued,
	iconSvg,
	iconSide,
	cssOverrides,
}: {
	isButton?: boolean;
	priority: LinkPriority;
	isSubdued: boolean;
	iconSvg?: ReactElement;
	iconSide: IconSide;
	cssOverrides?: SerializedStyles | SerializedStyles[];
}) => {
	/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	return (theme: any) => [
		link,
		isButton ? buttonLink : '',
		priorities[priority](theme.link && theme),
		isSubdued ? subdued : '',
		iconSvg ? icon : '',
		iconSvg ? iconSides[iconSide] : '',
		cssOverrides,
	];
};

interface SharedLinkProps extends Props {
	priority: LinkPriority;
	subdued: boolean;
	icon?: ReactElement;
	iconSide: IconSide;
	children?: ReactNode;
	cssOverrides?: SerializedStyles | SerializedStyles[];
}

interface LinkProps
	extends AnchorHTMLAttributes<HTMLAnchorElement>,
		SharedLinkProps {
	priority: LinkPriority;
	subdued: boolean;
	icon?: ReactElement;
	iconSide: IconSide;
	children?: ReactNode;
	cssOverrides?: SerializedStyles | SerializedStyles[];
}

const Link = ({
	priority,
	subdued: isSubdued,
	icon: iconSvg,
	iconSide,
	cssOverrides,
	children,
	...props
}: LinkProps) => {
	return (
		<a
			css={linkStyles({
				priority,
				isSubdued,
				iconSvg,
				iconSide,
				cssOverrides,
			})}
			{...props}
		>
			{linkContents({ children, iconSvg, iconSide })}
		</a>
	);
};

interface ButtonLinkProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		SharedLinkProps {
	priority: LinkPriority;
	subdued: boolean;
	icon?: ReactElement;
	iconSide: IconSide;
	children?: ReactNode;
	cssOverrides?: SerializedStyles | SerializedStyles[];
}

const ButtonLink = ({
	priority,
	subdued: isSubdued,
	icon: iconSvg,
	iconSide,
	cssOverrides,
	children,
	...props
}: ButtonLinkProps) => {
	return (
		<button
			css={linkStyles({
				isButton: true,
				priority,
				isSubdued,
				iconSvg,
				iconSide,
				cssOverrides,
			})}
			{...props}
		>
			{linkContents({ children, iconSvg, iconSide })}
		</button>
	);
};

const defaultLinkProps = {
	priority: 'primary',
	subdued: false,
	iconSide: 'left',
};

Link.defaultProps = { ...defaultLinkProps };
ButtonLink.defaultProps = { ...defaultLinkProps };

export { Link, ButtonLink };
