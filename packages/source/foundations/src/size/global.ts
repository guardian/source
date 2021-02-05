import { size as _size } from '../theme';
import { pxToRem } from '../utils';

/*
   The size scale is based entirely on the medium, small and
   xsmall buttons. The medium size meets WCAG 2.1 AAA compliance
   for touch targets.
*/
const size = {
	xsmall: _size[0],
	small: _size[1],
	medium: _size[2],
};

const remSize: { [K in keyof typeof size]: number } = {
	xsmall: pxToRem(_size[0]),
	small: pxToRem(_size[1]),
	medium: pxToRem(_size[2]),
};

/*
   We attempt to use these values for icons within Source components.
   They are analogous with component heights defined by the size values
   above. They are based on the size of icons used within the button
   component.
*/
const iconSize = {
	xsmall: 20,
	small: 26,
	medium: 30,
};

const remIconSize: { [K in keyof typeof iconSize]: number } = {
	xsmall: pxToRem(20),
	small: pxToRem(26),
	medium: pxToRem(30),
};

export { size, remSize, iconSize, remIconSize };
