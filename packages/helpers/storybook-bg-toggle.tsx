import { linkTo } from "@storybook/addon-links"
import { ReactNode } from "react"
import { css } from "@emotion/core"

const spaceBetween = css`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const WithBackgroundToggle = ({
	storyKind,
	storyName,
	selectedValue,
	children,
}: {
	storyKind: string
	storyName: string
	selectedValue: string
	children: ReactNode
}) => (
	<div css={spaceBetween}>
		{children}
		<select
			value={`${storyName} ${selectedValue}`}
			onChange={linkTo(storyKind, e => e.currentTarget.value)}
		>
			<option value={`${storyName} light`}>Light Mode</option>
			<option value={`${storyName} dark`}>Dark Mode</option>
		</select>
	</div>
)
