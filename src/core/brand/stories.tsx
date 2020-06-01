import React from "react"
import { css } from "@emotion/core"
import { storybookBackgrounds, ThemeName } from "@guardian/src-helpers"

import { SvgRoundel } from "./index"

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

const iconMedium = css`
	${icon};
	svg {
		width: 60px;
		height: 60px;
	}
`

const iconSmall = css`
	${icon};
	svg {
		width: 42px;
		height: 42px;
	}
`

const Small = ({
	theme,
	children,
}: {
	theme?: ThemeName
	children: JSX.Element | JSX.Element[]
}) => (
	<div css={[iconSmall, theme === "brand" ? iconWhite : ""]}>{children}</div>
)

const Default = ({
	theme,
	children,
}: {
	theme?: ThemeName
	children: JSX.Element | JSX.Element[]
}) => (
	<div css={[iconMedium, theme === "brand" ? iconWhite : ""]}>{children}</div>
)

export default {
	title: "Brand",
}

export const iconsDefaultBackground = () => (
	<>
		<Default>
			<SvgRoundel />
		</Default>
		<Small>
			<SvgRoundel />
		</Small>
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
		<Default theme="brand">
			<SvgRoundel />
		</Default>
		<Small theme="brand">
			<SvgRoundel />
		</Small>
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
