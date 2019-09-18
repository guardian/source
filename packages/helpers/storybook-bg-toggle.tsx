import { linkTo } from "@storybook/addon-links"

export const Toggle = ({
	storyKind,
	storyName,
	selectedValue,
}: {
	storyKind: string
	storyName: string
	selectedValue: string
}) => (
	<select
		value={`${storyName} ${selectedValue}`}
		onChange={linkTo(storyKind, e => e.currentTarget.value)}
	>
		<option value={`${storyName} light`}>Light</option>
		<option value={`${storyName} dark`}>Dark</option>
	</select>
)
