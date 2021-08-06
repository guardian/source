import React from 'react';
import { css } from '@emotion/react';
import {
	SvgArrowRightStraight,
	SvgIndent,
	SvgExternal,
	SvgChevronLeftSingle,
} from '@guardian/src-icons';
import { space } from '@guardian/src-foundations';
import { ThemeProvider } from '@emotion/react';
import { ButtonLink } from './ButtonLink';
import { linkDefault } from './index';
import { textSans } from '@guardian/src-foundations/typography';
import { ButtonLinkProps } from './ButtonLink';

export default {
	title: 'Source/src-link/ButtonLink',
	component: ButtonLink,
};

/* eslint-disable react/jsx-key */
const buttonLinks = [
	<ButtonLink onClick={() => console.log('Primary clicked')}>
		Primary
	</ButtonLink>,
	<ButtonLink
		priority="secondary"
		onClick={() => console.log('Secondary clicked')}
	>
		Secondary
	</ButtonLink>,
];
/* eslint-enable react/jsx-key */

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> * {
		margin-right: ${space[9]}px;
	}
`;

const spacer = css`
	margin-bottom: ${space[4]}px;
`;

const text = css`
	${textSans.medium()}
`;

export const Demo = (args: ButtonLinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<p css={text}>
			Please{' '}
			<ButtonLink
				{...args}
				onClick={() => console.log('Button link clicked')}
			>
				click me
			</ButtonLink>
			. Thanks!
		</p>
	</ThemeProvider>
);

Demo.story = {
	args: {
		priority: 'primary',
		subdued: false,
		icon: <SvgExternal />,
		iconSide: 'left',
	},
	argTypes: {
		icon: { control: null },
		cssOverrides: { control: null },
	},
};

export const InlineButtonLink = (_: ButtonLinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<p css={text}>
			Please{' '}
			<ButtonLink onClick={() => console.log('Button link clicked')}>
				click me
			</ButtonLink>
			. Thanks!
		</p>
	</ThemeProvider>
);

InlineButtonLink.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const ButtonLinksLight = (_: ButtonLinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<div css={flexStart}>
			{buttonLinks.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
);

ButtonLinksLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const TextAndIconButtonLinks = (_: ButtonLinkProps) => (
	<>
		<div css={spacer}>
			<ButtonLink
				icon={<SvgExternal />}
				onClick={() => console.log('Clicked')}
			>
				Terms and conditions
			</ButtonLink>
		</div>
		<div css={[flexStart, spacer]}>
			<ButtonLink
				icon={<SvgChevronLeftSingle />}
				onClick={() => console.log('Clicked')}
			>
				Previous
			</ButtonLink>
			<ButtonLink
				iconSide="right"
				icon={<SvgArrowRightStraight />}
				onClick={() => console.log('Clicked')}
			>
				Next
			</ButtonLink>
		</div>
		<div css={spacer}>
			<ButtonLink
				iconSide="left"
				icon={<SvgIndent />}
				onClick={() => console.log('Clicked')}
			>
				Indent
			</ButtonLink>
		</div>
		<div css={spacer}>
			<ButtonLink
				icon={<SvgExternal />}
				subdued={true}
				onClick={() => console.log('Clicked')}
			>
				Terms and conditions
			</ButtonLink>
		</div>
		<div css={[flexStart, spacer]}>
			<ButtonLink
				icon={<SvgChevronLeftSingle />}
				subdued={true}
				onClick={() => console.log('Clicked')}
			>
				Previous
			</ButtonLink>
			<ButtonLink
				iconSide="right"
				icon={<SvgArrowRightStraight />}
				subdued={true}
				onClick={() => console.log('Clicked')}
			>
				Next
			</ButtonLink>
		</div>
		<div css={spacer}>
			<ButtonLink
				iconSide="left"
				icon={<SvgIndent />}
				subdued={true}
				onClick={() => console.log('Clicked')}
			>
				Indent
			</ButtonLink>
		</div>
	</>
);
TextAndIconButtonLinks.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};
