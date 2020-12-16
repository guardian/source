import React from "react"
import { css } from "@emotion/react"
import { storybookBackgrounds, ThemeName } from "@guardian/src-helpers"
import { SvgGuardianLiveLogo } from "../index"

console.log("Storybook, here are your backgrounds", storybookBackgrounds)

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

const logo = css`
	${icon};
	svg {
		width: 539px;
		height: 173px;
	}
`

const Logo = ({
	theme,
	children,
}: {
	theme?: ThemeName
	children: JSX.Element | JSX.Element[]
}) => <div css={[logo, theme === "brand" ? iconWhite : ""]}>{children}</div>

export const guardianLiveDefaultBackground = () => (
	<Logo>
		<SvgGuardianLiveLogo />
	</Logo>
)

guardianLiveDefaultBackground.story = {
	name: "guardian live default",
}

export const guardianLiveBrandBackground = () => (
	<Logo theme="brand">
		<SvgGuardianLiveLogo />
	</Logo>
)

guardianLiveBrandBackground.story = {
	name: "guardian live brand",
	parameters: {
		backgrounds: {
			default: "brand",
			values: [storybookBackgrounds.brand],
		},
	},
}
