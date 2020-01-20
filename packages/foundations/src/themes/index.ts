export * from "./button"
export * from "./checkbox"
export * from "./inline-error"
export * from "./link"
export * from "./radio"
export * from "./text-input"

import {
	buttonLight,
	buttonBrand,
	buttonBrandYellow,
	buttonDefault,
	buttonBrandDefault,
	buttonBrandAlt,
} from "./button"
import {
	checkboxLight,
	checkboxBrand,
	checkboxDefault,
	checkboxBrandDefault,
} from "./checkbox"
import {
	inlineErrorLight,
	inlineErrorBrand,
	inlineErrorDefault,
	inlineErrorBrandDefault,
} from "./inline-error"
import {
	linkLight,
	linkBrand,
	linkBrandYellow,
	linkDefault,
	linkBrandDefault,
	linkBrandAlt,
} from "./link"
import {
	radioLight,
	radioBrand,
	radioDefault,
	radioBrandDefault,
} from "./radio"
import { textInputLight, textInputDefault } from "./text-input"

export const defaultTheme = {
	...buttonDefault,
	...checkboxDefault,
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

export const brandDefault = {
	...buttonBrandDefault,
	...checkboxBrandDefault,
	...inlineErrorBrandDefault,
	...linkBrandDefault,
	...radioBrandDefault,
	// continue to expose legacy theme names
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
export const brand = brandDefault
export const brandYellow = brandAlt
