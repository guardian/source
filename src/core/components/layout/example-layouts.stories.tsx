const gridStoryWrapper = (storyFn: () => JSX.Element) => {
	// override 8px margin applied globally to every preview body
	return <div style={{ margin: "0 -8px" }}>{storyFn()}</div>
}

export default {
	title: "Example Layouts",
	decorators: [gridStoryWrapper],
}

export * from "./stories/example-layouts/checkout"
export * from "./stories/example-layouts/showcase"
export * from "./stories/example-layouts/thank-you"
