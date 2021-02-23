import { HTMLAttributes, ReactNode } from 'react';
import { SerializedStyles } from '@emotion/react';
import { inline, inlineSpace } from './styles';
import { Props } from '../../../../helpers';

export type InlineSpace = 1 | 2 | 3 | 4 | 5 | 6 | 9 | 12 | 24;

export interface InlineProps extends HTMLAttributes<HTMLDivElement>, Props {
	space?: InlineSpace;
	cssOverrides?: SerializedStyles | SerializedStyles[];
	children: ReactNode;
}

const Inline = ({ cssOverrides, children, space, ...props }: InlineProps) => {
	return (
		<div
			css={[inline, space ? inlineSpace[space] : '', cssOverrides]}
			{...props}
		>
			{children}
		</div>
	);
};

const defaultProps = {};

Inline.defaultProps = { ...defaultProps };

export { Inline };
