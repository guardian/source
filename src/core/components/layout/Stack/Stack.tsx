import { Props } from '@guardian/src-helpers';
import { HTMLAttributes } from 'react';
import { stack, stackSpace } from './styles';

export type StackSpace = 1 | 2 | 3 | 4 | 5 | 6 | 9 | 12 | 24;

export interface StackProps extends HTMLAttributes<HTMLDivElement>, Props {
	space?: StackSpace;
}

export const Stack = ({
	cssOverrides,
	children,
	space,
	...props
}: StackProps) => {
	return (
		<div
			css={[stack, space ? stackSpace[space] : '', cssOverrides]}
			{...props}
		>
			{children}
		</div>
	);
};
