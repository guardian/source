// Global colour names that correspond to https://www.theguardian.design/2a1e5182b/p/938810-colour/b/587ef3
//
// As a general rule, avoid using these directly in your application. Prefer the context
// specific colours:
//
// - background.ts
// - border.ts
// - line.ts
// - text.ts
//
// Why?
// 1) Using context-specific colours ensures your application's colour usage is consistent with
// the Guardian's visual language.
// 2) The higher level of abstraction provided. This means that
// changes to colours at the theme level, or changes to global colours names, are less likely to
// have a large impact on your application.
// 3) Context-specific colours are tested and provide better accessibility guarantees.
//
// If a context-specific colour is not available for your use case, consider raising a pull
// request to add it, rather than consuming the global colour.

import { colors } from "../theme"

export const brand = {
	100: colors.blues[7],
	300: colors.blues[8],
	400: colors.blues[9],
	500: colors.blues[10],
	600: colors.blues[11],
	800: colors.blues[12],
}
export const brandAlt = {
	200: colors.yellows[0],
	300: colors.yellows[1],
	400: colors.yellows[2],
}
export const neutral = {
	0: colors.grays[0],
	7: colors.grays[1],
	10: colors.grays[2],
	20: colors.grays[3],
	46: colors.grays[4],
	60: colors.grays[5],
	86: colors.grays[6],
	93: colors.grays[7],
	97: colors.grays[8],
	100: colors.grays[9],
}
export const error = {
	400: colors.reds[3],
	500: colors.reds[5],
}
export const success = {
	400: colors.greens[1],
	500: colors.greens[2],
}
export const news = {
	100: colors.reds[0],
	200: colors.reds[1],
	300: colors.reds[2],
	400: colors.reds[3],
	500: colors.reds[4],
	550: colors.reds[5],
	600: colors.reds[6],
	800: colors.reds[7],
}
export const opinion = {
	100: colors.oranges[0],
	200: colors.oranges[1],
	300: colors.oranges[2],
	400: colors.oranges[3],
	500: colors.oranges[4],
	600: colors.oranges[5],
	800: colors.oranges[6],
}
export const sport = {
	100: colors.blues[0],
	200: colors.blues[1],
	300: colors.blues[2],
	400: colors.blues[3],
	500: colors.blues[4],
	600: colors.blues[5],
	800: colors.blues[6],
}
export const culture = {
	100: colors.browns[0],
	200: colors.browns[1],
	300: colors.browns[2],
	400: colors.browns[3],
	500: colors.browns[4],
	600: colors.browns[5],
	800: colors.browns[6],
}
export const lifestyle = {
	100: colors.pinks[0],
	200: colors.pinks[1],
	300: colors.pinks[2],
	400: colors.pinks[3],
	500: colors.pinks[4],
	600: colors.pinks[5],
	800: colors.pinks[6],
}
export const labs = {
	200: colors.greens[3],
	300: colors.greens[4],
	400: colors.greens[5],
}

export const specialReport = {
	100: colors.grays[10],
	200: colors.grays[11],
	300: colors.grays[12],
	400: colors.grays[13],
	500: colors.grays[14],
	800: colors.grays[15],
}
