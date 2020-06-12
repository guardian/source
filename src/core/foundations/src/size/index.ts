import { size, remSize, iconSize, remIconSize } from "./global"

const height = {
	ctaMedium: size.medium,
	ctaSmall: size.small,
	ctaXsmall: size.xsmall,
	inputMedium: size.medium,
	inputXsmall: size.xsmall,
	iconMedium: iconSize.medium,
	iconSmall: iconSize.small,
	iconXsmall: iconSize.xsmall,
}

const remHeight = {
	ctaMedium: remSize.medium,
	ctaSmall: remSize.small,
	ctaXsmall: remSize.xsmall,
	inputMedium: remSize.medium,
	inputXsmall: remSize.xsmall,
	iconMedium: remIconSize.medium,
	iconSmall: remIconSize.small,
	iconXsmall: remIconSize.xsmall,
}

const width = {
	ctaMedium: size.medium,
	ctaSmall: size.small,
	ctaXsmall: size.xsmall,
	inputXsmall: size.xsmall,
	iconMedium: iconSize.medium,
	iconSmall: iconSize.small,
	iconXsmall: iconSize.xsmall,
}

const remWidth = {
	ctaMedium: remSize.medium,
	ctaSmall: remSize.small,
	ctaXsmall: remSize.xsmall,
	inputXsmall: remSize.xsmall,
	iconMedium: remIconSize.medium,
	iconSmall: remIconSize.small,
	iconXsmall: remIconSize.xsmall,
}

export { height, remHeight, width, remWidth, size, iconSize }
