import React, { ReactElement, ReactNode } from 'react';
import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/react';
import { ButtonTheme } from '@guardian/src-foundations/themes';
import { visuallyHidden } from '@guardian/src-foundations/accessibility';
import {
	button,
	primary,
	secondary,
	tertiary,
	subdued,
	defaultSize,
	smallSize,
	xsmallSize,
	iconDefault,
	iconSmall,
	iconXsmall,
	iconLeft,
	iconRight,
	iconOnlyDefault,
	iconOnlySmall,
	iconOnlyXsmall,
	iconNudgeAnimation,
} from './styles';
import type {
	ButtonPriority,
	IconSide,
	Size,
	SharedButtonProps,
} from './types';

export const priorities: {
	[key in ButtonPriority]: ({
		button,
	}: {
		button: ButtonTheme;
	}) => SerializedStyles;
} = {
	primary,
	secondary,
	tertiary,
	subdued,
};

export const iconSides: {
	[key in IconSide]: SerializedStyles;
} = {
	right: iconRight,
	left: iconLeft,
};

export const sizes: {
	[key in Size]: SerializedStyles;
} = {
	default: defaultSize,
	small: smallSize,
	xsmall: xsmallSize,
};
export const iconSizes: {
	[key in Size]: SerializedStyles;
} = {
	default: iconDefault,
	small: iconSmall,
	xsmall: iconXsmall,
};
export const iconOnlySizes: {
	[key in Size]: SerializedStyles;
} = {
	default: iconOnlyDefault,
	small: iconOnlySmall,
	xsmall: iconOnlyXsmall,
};

export const buttonContents = ({
	hideLabel,
	iconSvg,
	children,
}: {
	hideLabel?: boolean;
	iconSvg?: ReactElement;
	children: ReactNode;
}) => {
	const contents = [children];

	if (iconSvg) {
		if (!hideLabel) {
			contents.push(<div key="space" className="src-button-space" />);
		}
		contents.push(React.cloneElement(iconSvg, { key: 'svg' }));
	}
	if (hideLabel) {
		return (
			<>
				<span
					css={css`
						${visuallyHidden};
					`}
				>
					{children}
				</span>
				{contents[1]}
			</>
		);
	} else {
		return contents;
	}
};

export const buttonStyles =
	({
		priority = 'primary',
		size = 'default',
		icon: iconSvg,
		hideLabel,
		iconSide = 'left',
		nudgeIcon,
		cssOverrides,
	}: SharedButtonProps) =>
	/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	(theme: any) =>
		[
			button,
			sizes[size],
			priorities[priority](theme.button && theme),
			iconSvg ? iconSizes[size] : '',
			iconSvg && !hideLabel ? iconSides[iconSide] : '',
			nudgeIcon ? iconNudgeAnimation : '',
			hideLabel ? iconOnlySizes[size] : '',
			cssOverrides,
		];
