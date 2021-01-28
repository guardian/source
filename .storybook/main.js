
const editorialStorybookUrl =
process.env.NODE_ENV === 'production'
	? 'https://guardian.github.io/source/editorial'
	: 'http://localhost:9011'

const refs = {
	editorial: {
		title: "Editorial System",
		url: editorialStorybookUrl
	}
}

module.exports = {
	stories: [`../src/${process.env.SB_STORY_PATH || core}/**/*stories.tsx`],
	addons: ["@storybook/addon-backgrounds", "@storybook/addon-viewport"],
	...process.env.SB_STORY_PATH === 'core' ? { refs } : {}
}
