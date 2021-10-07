// FYI
// packages/@guardian/src-foundations/src/size.ts SYMLINKS TO
// packages/@guardian/source-foundations/src/size/size.ts

import { pxToRem } from './utils/px-to-rem';

/*
   The size scale is based entirely on the medium, small and
   xsmall buttons. The medium size meets WCAG 2.1 AAA compliance
   for touch targets.
*/
export const size = {
	xsmall: 24,
	small: 36,
	medium: 44,
};

const remSize: { [K in keyof typeof size]: number } = {
	xsmall: pxToRem(size.xsmall),
	small: pxToRem(size.small),
	medium: pxToRem(size.medium),
};

/*
   We attempt to use these values for icons within Source components.
   They are analogous with component heights defined by the size values
   above. They are based on the size of icons used within the button
   component.
*/
export const iconSize = {
	xsmall: 20,
	small: 26,
	medium: 30,
};

const remIconSize: { [K in keyof typeof iconSize]: number } = {
	xsmall: pxToRem(iconSize.xsmall),
	small: pxToRem(iconSize.small),
	medium: pxToRem(iconSize.medium),
};

export const height = {
	ctaMedium: size.medium,
	ctaSmall: size.small,
	ctaXsmall: size.xsmall,
	inputMedium: size.medium,
	inputXsmall: size.xsmall,
	iconMedium: iconSize.medium,
	iconSmall: iconSize.small,
	iconXsmall: iconSize.xsmall,
};

export const remHeight = {
	ctaMedium: remSize.medium,
	ctaSmall: remSize.small,
	ctaXsmall: remSize.xsmall,
	inputMedium: remSize.medium,
	inputXsmall: remSize.xsmall,
	iconMedium: remIconSize.medium,
	iconSmall: remIconSize.small,
	iconXsmall: remIconSize.xsmall,
};

export const width = {
	ctaMedium: size.medium,
	ctaSmall: size.small,
	ctaXsmall: size.xsmall,
	inputXsmall: size.xsmall,
	iconMedium: iconSize.medium,
	iconSmall: iconSize.small,
	iconXsmall: iconSize.xsmall,
};

export const remWidth = {
	ctaMedium: remSize.medium,
	ctaSmall: remSize.small,
	ctaXsmall: remSize.xsmall,
	inputXsmall: remSize.xsmall,
	iconMedium: remIconSize.medium,
	iconSmall: remIconSize.small,
	iconXsmall: remIconSize.xsmall,
};
