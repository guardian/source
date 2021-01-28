const refs = {
	editorial: {
		title: "Editorial System",
		url: process.env.NODE_ENV === 'production' ? '/editorial' : 'http://localhost:9011'
	}
}

console.log(process.env.SB_STORY_PATH === 'core' ? refs : {})

module.exports = {
	stories: [`../src/${process.env.SB_STORY_PATH}/**/*stories.tsx`],
	addons: ["@storybook/addon-backgrounds", "@storybook/addon-viewport"],
	...process.env.SB_STORY_PATH === 'core' ? { refs } : {}
}
