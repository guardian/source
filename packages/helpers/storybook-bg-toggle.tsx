import { linkTo } from "@storybook/addon-links"
import React, { ReactNode } from "react"
import { css } from "@emotion/core"
import { Appearance } from "@guardian/src-helpers"

const spaceBetween = css`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const appearanceDescriptions: {
	[key in Appearance]: string
} = {
	light: "Brand light mode (default)",
	dark: "Brand dark mode",
	blue: "Blue blue background",
	yellow: "Brand yellow background",
	"reader revenue": "Reader revenue blue background (default)",
}

export const WithBackgroundToggle = ({
	storyKind,
	storyName,
	options = ["light", "dark", "blue", "yellow", "reader revenue"],
	selectedValue,
	children,
}: {
	storyKind: string
	storyName: string
	options?: Appearance[]
	selectedValue: string
	children: ReactNode
}) => (
	<div css={spaceBetween}>
		{children}
		<select
			value={`${storyName} ${selectedValue}`}
			onChange={linkTo(storyKind, (e: Event) => {
				const target = e.currentTarget as HTMLSelectElement

				if (!target) {
					return ""
				}

				return target.value
			})}
		>
			{options.map((option: Appearance, index) => (
				<option
					value={`${storyName} ${option}`}
					key={`background-toggle-${index}`}
				>
					{appearanceDescriptions[option]}
				</option>
			))}
		</select>
	</div>
)
