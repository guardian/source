import { breakpoints, from, until } from "./index"

it("from should return a min-width media query", () => {
	expect(from.mobile).toBe(`@media (min-width: ${`${breakpoints.mobile}px`})`)
})

it("until should return a max-width media query", () => {
	expect(until.wide).toBe(
		`@media (max-width: ${`${breakpoints.wide - 1}px`})`,
	)
})
