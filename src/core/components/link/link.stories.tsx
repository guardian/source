import React from 'react';
import { css } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { textSans } from '@guardian/src-foundations/typography';
import { linkDefault, linkBrandAlt, linkBrand } from './index';
import { Link, LinkProps } from './Link';
import {
	SvgArrowRightStraight,
	SvgExternal,
	SvgChevronRightSingle,
	SvgChevronLeftSingle,
	SvgIndent,
} from '@guardian/src-icons';
import { space } from '@guardian/src-foundations';
import { storybookBackgrounds } from '@guardian/src-helpers';

export default {
	title: 'Source/src-link/Link',
	component: Link,
};

const text = css`
	${textSans.medium()}
`;

/* eslint-disable react/jsx-key */
const priorityLinks = [
	<Link href="#">Primary</Link>,
	<Link priority="secondary" href="#">
		Secondary
	</Link>,
];

const subduedLinks = [
	<Link subdued={true} href="#">
		Primary subdued
	</Link>,
	<Link subdued={true} priority="secondary" href="#">
		Secondary subdued
	</Link>,
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

export const Demo = (args: LinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<p css={text}>
			You can{' '}
			<Link {...args} href="#">
				read more
			</Link>{' '}
			about our services
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

export const InlineLink = (_: LinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<p css={text}>
			You can <Link href="#">read more</Link> about our services
		</p>
	</ThemeProvider>
);

InlineLink.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const InlineLinkIcon = (_: LinkProps) => (
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

InlineLinkIcon.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const PriorityLight = (_: LinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<div css={flexStart}>
			{priorityLinks.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
);

PriorityLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const PriorityBlue = (_: LinkProps) => (
	<ThemeProvider theme={linkBrand}>
		<Link href="#">Primary</Link>
	</ThemeProvider>
);

PriorityBlue.story = {
	parameters: {
		backgrounds: {
			default: 'brand',
			values: [storybookBackgrounds.brand],
		},
		controls: {
			disabled: true,
		},
	},
};

export const PriorityYellow = (_: LinkProps) => (
	<ThemeProvider theme={linkBrandAlt}>
		<Link href="#">Primary</Link>
	</ThemeProvider>
);

PriorityYellow.story = {
	parameters: {
		backgrounds: {
			default: 'brandAlt',
			values: [storybookBackgrounds.brandAlt],
		},
		controls: {
			disabled: true,
		},
	},
};

export const SubduedLight = (_: LinkProps) => (
	<ThemeProvider theme={linkDefault}>
		<div css={flexStart}>
			{subduedLinks.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
);

SubduedLight.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const TextAndIconLinks = (_: LinkProps) => (
	<>
		<div css={spacer}>
			<Link icon={<SvgExternal />} href="#">
				Terms and conditions
			</Link>
		</div>
		<div css={[flexStart, spacer]}>
			<Link icon={<SvgChevronLeftSingle />} href="#">
				Previous
			</Link>
			<Link iconSide="right" icon={<SvgArrowRightStraight />} href="#">
				Next
			</Link>
		</div>
		<div css={spacer}>
			<Link iconSide="left" icon={<SvgIndent />} href="#">
				Indent
			</Link>
		</div>
		<div css={spacer}>
			<Link icon={<SvgExternal />} subdued={true} href="#">
				Terms and conditions
			</Link>
		</div>
		<div css={[flexStart, spacer]}>
			<Link icon={<SvgChevronLeftSingle />} subdued={true} href="#">
				Previous
			</Link>
			<Link
				iconSide="right"
				icon={<SvgArrowRightStraight />}
				subdued={true}
				href="#"
			>
				Next
			</Link>
		</div>
		<div css={spacer}>
			<Link iconSide="left" icon={<SvgIndent />} subdued={true} href="#">
				Indent
			</Link>
		</div>
	</>
);

TextAndIconLinks.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};
