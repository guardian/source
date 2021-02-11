import React, { HTMLAttributes, ReactNode } from 'react';
import { SerializedStyles } from '@emotion/react';
import { stack, stackSpace } from './styles';
import { Props } from '../../../../helpers';

export type StackSpace = 1 | 2 | 3 | 4 | 5 | 6 | 9 | 12 | 24;

interface StackProps extends HTMLAttributes<HTMLDivElement>, Props {
	space?: StackSpace;
	cssOverrides?: SerializedStyles | SerializedStyles[];
	children: ReactNode;
}

const Stack = ({ cssOverrides, children, space, ...props }: StackProps) => {
	return (
		<div
			css={[stack, space ? stackSpace[space] : '', cssOverrides]}
			{...props}
		>
			{children}
		</div>
	);
};

const defaultProps = {};

Stack.defaultProps = { ...defaultProps };

export { Stack };
