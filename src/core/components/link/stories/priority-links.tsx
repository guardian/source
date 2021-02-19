import { css } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { storybookBackgrounds } from '@guardian/src-helpers';
import { space } from '@guardian/src-foundations';
import { Link, linkDefault, linkBrandAlt, linkBrand } from '../index';

/* eslint-disable react/jsx-key */
const priorityLinks = [
	<Link href="#">Primary</Link>,
	<Link priority="secondary" href="#">
		Secondary
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

export const priorityLight = () => (
	<ThemeProvider theme={linkDefault}>
		<div css={flexStart}>
			{priorityLinks.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
);
priorityLight.story = { name: 'priority light' };

export const priorityBlue = () => (
	<ThemeProvider theme={linkBrand}>
		<Link href="#">Primary</Link>
	</ThemeProvider>
);
priorityBlue.story = {
	name: 'priority blue',
	parameters: {
		backgrounds: {
			default: 'brand',
			values: [storybookBackgrounds.brand],
		},
	},
};

export const priorityYellow = () => (
	<ThemeProvider theme={linkBrandAlt}>
		<Link href="#">Primary</Link>
	</ThemeProvider>
);
priorityYellow.story = {
	name: 'priority yellow',
	parameters: {
		backgrounds: {
			default: 'brandAlt',
			values: [storybookBackgrounds.brandAlt],
		},
	},
};
