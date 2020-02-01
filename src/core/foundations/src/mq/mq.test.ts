import { breakpoints, from } from "./index"

it("from should return a min-width media query", () => {
	expect(from.mobile).toBe(`@media (min-width: ${`${breakpoints.mobile}px`})`)
})
