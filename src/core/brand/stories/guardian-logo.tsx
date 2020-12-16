import React from "react"
import { css } from "@emotion/react"
import { storybookBackgrounds, ThemeName } from "@guardian/src-helpers"
import { SvgGuardianLogo } from "../index"

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

export const logoDefaultBackground = () => (
	<Logo>
		<SvgGuardianLogo />
	</Logo>
)

logoDefaultBackground.story = {
	name: "guardian logo default",
}

export const logoBrandBackground = () => (
	<Logo theme="brand">
		<SvgGuardianLogo />
	</Logo>
)

logoBrandBackground.story = {
	name: "guardian logo default brand",
	parameters: {
		backgrounds: {
			default: "brand",
			values: [storybookBackgrounds.brand],
		},
	},
}
