import {
	headline,
	fonts,
	headlineSizes,
	fontWeights,
	lineHeights,
} from "./index"

it("should return styles containing the specified font family", () => {
	const mediumHeadlineStyles = headline.medium()

	expect(mediumHeadlineStyles).toContain(`font-family: ${fonts.headline};`)
})

it("should return styles containing the specified font size", () => {
	const mediumHeadlineStyles = headline.medium()

	expect(mediumHeadlineStyles).toContain(
		`font-size: ${headlineSizes.medium}rem;`,
	)
})

it("should return styles containing the specified font weight", () => {
	const mediumHeadlineStyles = headline.medium({ fontWeight: "bold" })

	expect(mediumHeadlineStyles).toContain(`font-weight: ${fontWeights.bold};`)
})

it("should return styles containing the specified line height", () => {
	const mediumHeadlineStyles = headline.medium({ lineHeight: "tight" })

	expect(mediumHeadlineStyles).toContain(`line-height: ${lineHeights.tight};`)
})

it("should return italic styles if specified", () => {
	const mediumHeadlineStyles = headline.medium({ italic: true })

	expect(mediumHeadlineStyles).toContain("font-style: italic;")
})

it("should not include italic font style if it is not available for requested font", () => {
	const mediumHeadlineStyles = headline.medium({
		fontWeight: "bold",
		italic: true,
	})

	expect(mediumHeadlineStyles).not.toContain("font-style: italic;")
})
