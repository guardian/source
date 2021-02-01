import React from "react";
import { css } from "@emotion/react";
import { storybookBackgrounds } from "@guardian/src-helpers";
import {
	SvgRoundelDefault,
	SvgRoundelInverse,
	SvgRoundelBrand,
	SvgRoundelBrandInverse,
} from "../index";

const icon = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
	}
`;

const logo = css`
	${icon};
	svg {
		width: 60px;
		height: 60px;
	}
`;

const Logo = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<div css={logo}>{children}</div>
);

export const defaultRoundel = () => (
	<Logo>
		<SvgRoundelDefault />
	</Logo>
);

defaultRoundel.story = {
	name: "default roundel",
};

export const brandRoundel = () => (
	<Logo>
		<SvgRoundelBrand />
	</Logo>
);

brandRoundel.story = {
	name: "brand roundel",
	parameters: {
		backgrounds: {
			default: "brand",
			values: [storybookBackgrounds.brand],
		},
	},
};

export const inverseRoundel = () => (
	<Logo>
		<SvgRoundelInverse />
	</Logo>
);

inverseRoundel.story = {
	name: "inverse roundel",
	parameters: {
		backgrounds: {
			default: "inverse",
			values: [storybookBackgrounds.inverse],
		},
	},
};

export const inverseBrandRoundel = () => (
	<Logo>
		<SvgRoundelBrandInverse />
	</Logo>
);

inverseBrandRoundel.story = {
	name: "inverse brand roundel",
	parameters: {
		backgrounds: {
			default: "brand",
			values: [storybookBackgrounds.brand],
		},
	},
};
