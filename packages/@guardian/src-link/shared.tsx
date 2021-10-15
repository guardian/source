import { cloneElement, Fragment, ReactElement, ReactNode } from 'react';
import { IconSide } from './types';

export const linkContents = ({
	children,
	iconSvg,
	iconSide,
}: {
	children: ReactNode;
	iconSvg?: ReactElement;
	iconSide: IconSide;
}) => {
	// a bit of underlined space; the icon sits on top
	const spacer = (
		<Fragment key="spacer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
	);
	const linkContents = [children];

	if (iconSvg) {
		if (iconSide === 'left') {
			linkContents.unshift(spacer, cloneElement(iconSvg, { key: 'svg' }));
		} else {
			linkContents.push(spacer, cloneElement(iconSvg, { key: 'svg' }));
		}
	}

	return linkContents;
};
