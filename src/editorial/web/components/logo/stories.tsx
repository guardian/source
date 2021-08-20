import React from 'react';
import { css } from '@emotion/react';

import { Logo } from '.';

export default {
	title: 'Editorial/src-ed-logo/Logo',
	component: Logo,
};

const FakeHeader = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			css={css`
				background-color: #052962;
				height: 440px;
				padding: 20px;
			`}
		>
			{children}
		</div>
	);
};

export const Desktop = () => (
	<FakeHeader>
		<Logo logoType="standard" />
		<br />
		<Logo logoType="anniversary" />
		<br />
		<Logo logoType="bestWebsite" />
	</FakeHeader>
);
Desktop.storyName = 'desktop';
Desktop.parameters = {
	viewport: {
		defaultViewport: 'desktop',
	},
};

export const Tablet = () => (
	<FakeHeader>
		<Logo logoType="standard" />
		<br />
		<Logo logoType="anniversary" />
		<br />
		<Logo logoType="bestWebsite" />
	</FakeHeader>
);
Tablet.storyName = 'tablet';
Tablet.parameters = {
	viewport: {
		defaultViewport: 'tablet',
	},
};

export const MobileMedium = () => (
	<FakeHeader>
		<Logo logoType="standard" />
		<br />
		<Logo logoType="anniversary" />
		<br />
		<Logo logoType="bestWebsite" />
	</FakeHeader>
);
MobileMedium.storyName = 'mobileMedium';
MobileMedium.parameters = {
	viewport: {
		defaultViewport: 'mobileMedium',
	},
};

export const Mobile = () => (
	<FakeHeader>
		<Logo logoType="standard" />
		<br />
		<Logo logoType="anniversary" />
		<br />
		<Logo logoType="bestWebsite" />
	</FakeHeader>
);
Mobile.storyName = 'mobile';
Mobile.parameters = {
	viewport: {
		defaultViewport: 'mobile',
	},
};
