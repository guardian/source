import React from "react"
import { css } from "@emotion/core"
import { storybookBackgrounds, ThemeName } from "@guardian/src-helpers"

import { SvgRoundel, SvgGuardianLogo, SvgGuardianLiveLogo } from "./index"

const iconWhite = css`
	color: white;
`

const icon = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
	}
`

const roundel = css`
	${icon};
	svg {
		width: 60px;
		height: 60px;
	}
`

const logo = css`
	${icon};
	svg {
		width: 539px;
		height: 173px;
	}
`

const spacer = css`
	margin-bottom: 1rem;
`

const Roundel = ({
	theme,
	children,
}: {
	theme?: ThemeName
	children: JSX.Element | JSX.Element[]
}) => (
	<div css={[roundel, theme === "brand" ? iconWhite : "", spacer]}>
		{children}
	</div>
)

const Logo = ({
	theme,
	children,
}: {
	theme?: ThemeName
	children: JSX.Element | JSX.Element[]
}) => (
	<div css={[logo, theme === "brand" ? iconWhite : "", spacer]}>
		{children}
	</div>
)

export default {
	title: "Brand",
}

export const iconsDefaultBackground = () => (
	<>
		<Roundel>
			<SvgRoundel />
		</Roundel>
		<Logo>
			<SvgGuardianLogo />
		</Logo>
	</>
)

iconsDefaultBackground.story = {
	name: "brand icons default",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

export const iconsBrandBackground = () => (
	<>
		<Roundel theme="brand">
			<SvgRoundel />
		</Roundel>
		<Logo theme="brand">
			<SvgGuardianLogo />
		</Logo>
	</>
)

iconsBrandBackground.story = {
	name: "brand icons brand",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}


export const guardianLiveDefaultBackground = () => (
	<>
		<Logo>
			<SvgGuardianLiveLogo />
		</Logo>
	</>
)

guardianLiveDefaultBackground.story = {
	name: "guardian live default",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}


export const guardianLiveBrandBackground = () => (
	<>
		<Logo theme="brand">
			<SvgGuardianLiveLogo />
		</Logo>
	</>
)

guardianLiveBrandBackground.story = {
	name: "guardian live brand",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}