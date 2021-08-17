import { Props } from '@guardian/src-helpers';
import { HTMLAttributes } from 'react';
import { inline, inlineSpace } from './styles';

export type InlineSpace = 1 | 2 | 3 | 4 | 5 | 6 | 9 | 12 | 24;

export interface InlineProps extends HTMLAttributes<HTMLDivElement>, Props {
	space?: InlineSpace;
}

export const Inline = ({
	cssOverrides,
	children,
	space,
	...props
}: InlineProps) => {
	return (
		<div
			css={[inline, space ? inlineSpace[space] : '', cssOverrides]}
			{...props}
		>
			{children}
		</div>
	);
};
