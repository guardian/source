import React from 'react';
import { css } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { textSans } from '../../../foundations/src/typography';
import { Link, linkDefault } from '../index';
import {
	SvgArrowRightStraight,
	SvgExternal,
	SvgChevronRightSingle,
	SvgChevronLeftSingle,
} from '../../../icons';

const text = css`
	${textSans.medium()}
`;

export const inlineLinkIcon = () => (
	<ThemeProvider theme={linkDefault}>
		<p css={text}>
			You can{' '}
			<Link
				iconSide="right"
				icon={<SvgArrowRightStraight />}
				subdued={true}
				href="#"
			>
				click this link to read more and find out all the important
				information
			</Link>{' '}
			about our services
		</p>
		<p css={text}>
			You can{' '}
			<Link
				iconSide="left"
				icon={<SvgExternal />}
				subdued={true}
				href="#"
			>
				click this link to read more and find out all the important
				information
			</Link>{' '}
			about our services
		</p>
		<p css={text}>
			Some more text here to test different wrapping points. You can{' '}
			<Link
				iconSide="right"
				icon={<SvgChevronRightSingle />}
				subdued={true}
				href="#"
			>
				click this link to read more and find out all the important
				information
			</Link>{' '}
			about our services
		</p>
		<p css={text}>
			Some more text here to test different wrapping points. You can{' '}
			<Link
				iconSide="left"
				icon={<SvgChevronLeftSingle />}
				subdued={true}
				href="#"
			>
				click this link to read more and find out all the important
				information
			</Link>{' '}
			about our services
		</p>
	</ThemeProvider>
);
inlineLinkIcon.story = { name: 'inline link icon' };
