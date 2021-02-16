import React, { HTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/react';
import { Breakpoint } from '../../../../foundations/src';
import { from, until } from '../../../../foundations/src/mq';
import { Props } from '../../../../helpers';

interface HideProps extends HTMLAttributes<HTMLDivElement>, Props {
	children: ReactNode;
	above?: Breakpoint;
	below?: Breakpoint;
}

const Hide = ({ children, above, below }: HideProps) => {
	let whenToHide;
	if (below) {
		whenToHide = css`
			${until[below]} {
				display: none;
			}
		`;
	}
	if (above) {
		whenToHide = css`
			${whenToHide}
			${from[above]} {
				display: none;
			}
		`;
	}

	return <span css={whenToHide}>{children}</span>;
};
const defaultProps = {};

Hide.defaultProps = { ...defaultProps };

export { Hide };
