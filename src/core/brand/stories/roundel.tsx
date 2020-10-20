import React from "react"
import { css } from "@emotion/core"
import { storybookBackgrounds } from "@guardian/src-helpers"
import {
	SvgRoundelDefault,
	SvgRoundelInverse,
	SvgRoundelBrand,
	SvgRoundelBrandInverse,
} from "../index"

const icon = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
	}
`

const logo = css`
	${icon};
	svg {
		width: 60px;
		height: 60px;
	}
`

const Logo = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<div css={logo}>{children}</div>
)

export const defaultRoundel = () => (
	<Logo>
		<SvgRoundelDefault />
	</Logo>
)

defaultRoundel.story = {
	name: "default roundel",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

export const brandRoundel = () => (
	<Logo>
		<SvgRoundelBrand />
	</Logo>
)

brandRoundel.story = {
	name: "brand roundel",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

export const inverseRoundel = () => (
	<Logo>
		<SvgRoundelInverse />
	</Logo>
)

inverseRoundel.story = {
	name: "inverse roundel",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.inverse),
		],
	},
}

export const inverseBrandRoundel = () => (
	<Logo>
		<SvgRoundelBrandInverse />
	</Logo>
)

inverseBrandRoundel.story = {
	name: "inverse brand roundel",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}
