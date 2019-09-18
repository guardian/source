import { linkTo } from "@storybook/addon-links"

export const BackgroundToggle = ({
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
		<option value={`${storyName} light`}>Light Mode</option>
		<option value={`${storyName} dark`}>Dark Mode</option>
	</select>
)
