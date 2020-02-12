export * from "./button"
export * from "./checkbox"
export * from "./choice-card"
export * from "./inline-error"
export * from "./link"
export * from "./radio"
export * from "./text-input"

import {
	buttonLight,
	buttonBrand,
	buttonBrandYellow,
	buttonDefault,
	buttonBrandAlt,
} from "./button"
import { checkboxLight, checkboxBrand, checkboxDefault } from "./checkbox"
import { choiceCardDefault } from "./choice-card"
import {
	inlineErrorLight,
	inlineErrorBrand,
	inlineErrorDefault,
} from "./inline-error"
import {
	linkLight,
	linkBrand,
	linkBrandYellow,
	linkDefault,
	linkBrandAlt,
} from "./link"
import { radioLight, radioBrand, radioDefault } from "./radio"
import { textInputLight, textInputDefault } from "./text-input"

export const defaultTheme = {
	...buttonDefault,
	...checkboxDefault,
	...choiceCardDefault,
	...inlineErrorDefault,
	...linkDefault,
	...radioDefault,
	...textInputDefault,
	// continue to expose legacy theme names
	...buttonLight,
	...checkboxLight,
	...inlineErrorLight,
	...linkLight,
	...radioLight,
	...textInputLight,
}

export const brand = {
	...buttonBrand,
	...checkboxBrand,
	...inlineErrorBrand,
	...linkBrand,
	...radioBrand,
}

export const brandAlt = {
	...buttonBrandAlt,
	...linkBrandAlt,
	// continue to expose legacy theme names
	...buttonBrandYellow,
	...linkBrandYellow,
}

// continue to expose legacy theme names
export const light = defaultTheme
export const brandYellow = brandAlt
