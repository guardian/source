// This is a temporary fix to make migration work as remSize and remIconSize were
// are technically importable from `@guardian/src-foundations/size/global` but not from
// @guardian/source-foundations

import { iconSize, size } from './size';
import { pxToRem } from './utils/px-to-rem';

export const remSize: { [K in keyof typeof size]: number } = {
	xsmall: pxToRem(size.xsmall),
	small: pxToRem(size.small),
	medium: pxToRem(size.medium),
};

export const remIconSize: { [K in keyof typeof iconSize]: number } = {
	xsmall: pxToRem(iconSize.xsmall),
	small: pxToRem(iconSize.small),
	medium: pxToRem(iconSize.medium),
};
