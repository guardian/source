import {
	headline,
	fonts,
	headlineSizes,
	fontWeights,
	lineHeights,
} from "./index"

it("should return styles containing the specified font family", () => {
	const mediumHeadlineStyles = headline.medium()

	expect(mediumHeadlineStyles.fontFamily).toBe(fonts.headline)
})

it("should return styles containing the specified font size", () => {
	const mediumHeadlineStyles = headline.medium()

	expect(mediumHeadlineStyles.fontSize).toBe(`${headlineSizes.medium}rem`)
})

it("should return styles containing the specified font weight", () => {
	const mediumHeadlineStyles = headline.medium({ fontWeight: "bold" })

	expect(mediumHeadlineStyles.fontWeight).toBe(fontWeights.bold)
})

it("should return styles containing the specified line height", () => {
	const mediumHeadlineStyles = headline.medium({ lineHeight: "tight" })

	expect(mediumHeadlineStyles.lineHeight).toBe(lineHeights.tight)
})

it("should return italic styles if specified", () => {
	const mediumHeadlineStyles = headline.medium({ italic: true })

	expect(mediumHeadlineStyles.fontStyle).toBe("italic")
})

it("should not include italic font style if it is not available for requested font", () => {
	const mediumHeadlineStyles = headline.medium({
		fontWeight: "bold",
		italic: true,
	})

	expect(mediumHeadlineStyles.fontStyle).toBeUndefined()
})
