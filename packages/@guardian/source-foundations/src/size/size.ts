import { pxToRem } from '../utils/px-to-rem';

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-size--page#global-size-values) •
 * [Design System](https://theguardian.design/2a1e5182b/p/24a3ec-size/t/329aef)
 *
 * May be used for call to action buttons and user input fields.
 */
export const size = {
	xsmall: 24,
	small: 36,
	medium: 44, // meets WCAG 2.1 AAA compliance for touch targets.
} as const;

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-size--page#global-size-values) •
 * [Design System](https://theguardian.design/2a1e5182b/p/24a3ec-size/t/329aef)
 *
 * May be used for call to action buttons and user input fields.
 *
 ** `remSize.medium` -> 2.75rem
 ** `remSize.small` -> 2.25rem
 ** `remSize.xsmall` -> 1.5rem
 */
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
} as const;

const remIconSize: { [K in keyof typeof iconSize]: number } = {
	xsmall: pxToRem(iconSize.xsmall),
	small: pxToRem(iconSize.small),
	medium: pxToRem(iconSize.medium),
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-size--page#tokens) •
 * [Design System](https://theguardian.design/2a1e5182b/p/24a3ec-size/t/329aef)
 *
 * Height tokens expressed in px
 *
 ** `height.ctaMedium`: call to action buttons and links
 ** `height.ctaSmall`: secondary calls to action
 ** `height.ctaXsmall`: calls to action where there is very limited space
 ** `height.inputMedium`: text input fields, radio and checkbox labels
 ** `height.inputXsmall`: checkables such as checkboxes or radio buttons
 ** `height.iconMedium`
 ** `height.iconSmall`
 ** `height.iconXsmall`
 */
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

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-size--page#tokens) •
 * [Design System](https://theguardian.design/2a1e5182b/p/24a3ec-size/t/329aef)
 *
 * Height tokens expressed in rem
 *
 ** `remHeight.ctaMedium`: call to action buttons and links
 ** `remHeight.ctaSmall`: secondary calls to action
 ** `remHeight.ctaXsmall`: calls to action where there is very limited space
 ** `remHeight.inputMedium`: text input fields, radio and checkbox labels
 ** `remHeight.inputXsmall`: checkables such as checkboxes or radio buttons
 ** `remHeight.iconMedium`
 ** `remHeight.iconSmall`
 ** `remHeight.iconXsmall`
 */
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

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-size--page#tokens) •
 * [Design System](https://theguardian.design/2a1e5182b/p/00ddcb-tokens/t/797660)
 *
 * Width tokens expressed in px
 *
 ** `width.ctaMedium`: medium height call to action buttons and links
 ** `width.ctaSmall`: small height call to action buttons and links
 ** `width.ctaXsmall`: xsmall height call to action buttons and links
 ** `width.inputMedium`: text input fields, radio and checkbox labels
 ** `width.inputXsmall`: checkables such as checkboxes or radio buttons
 ** `width.inputMedium`
 ** `width.inputXsmall`: checkables such as checkboxes or radio buttons
 ** `width.iconMedium`
 ** `width.iconSmall`
 ** `width.iconXsmall`
 */
export const width = {
	ctaMedium: size.medium,
	ctaSmall: size.small,
	ctaXsmall: size.xsmall,
	inputXsmall: size.xsmall,
	iconMedium: iconSize.medium,
	iconSmall: iconSize.small,
	iconXsmall: iconSize.xsmall,
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-size--page#tokens) •
 * [Design System](https://theguardian.design/2a1e5182b/p/00ddcb-tokens/t/797660)
 *
 * Width tokens expressed in rem
 *
 ** `remWidth.ctaMedium`: medium height call to action buttons and links
 ** `remWidth.ctaSmall`: small height call to action buttons and links
 ** `remWidth.ctaXsmall`: xsmall height call to action buttons and links
 ** `remWidth.inputMedium`: text input fields, radio and checkbox labels
 ** `remWidth.inputXsmall`: checkables such as checkboxes or radio buttons
 ** `remWidth.inputMedium`
 ** `remWidth.inputXsmall`: checkables such as checkboxes or radio buttons
 ** `remWidth.iconMedium`
 ** `remWidth.iconSmall`
 ** `remWidth.iconXsmall`
 */
export const remWidth = {
	ctaMedium: remSize.medium,
	ctaSmall: remSize.small,
	ctaXsmall: remSize.xsmall,
	inputXsmall: remSize.xsmall,
	iconMedium: remIconSize.medium,
	iconSmall: remIconSize.small,
	iconXsmall: remIconSize.xsmall,
};
