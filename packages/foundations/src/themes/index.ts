export * from "./button"
export * from "./inline-error"
export * from "./link"
export * from "./radio"
export * from "./text-input"

import { buttonLight, buttonBrand, buttonBrandYellow } from "./button"
import { inlineErrorLight, inlineErrorBrand } from "./inline-error"
import { linkLight, linkBrand, linkBrandYellow, linkMono } from "./link"
import { radioLight, radioBrand } from "./radio"
import { textInputLight } from "./text-input"

export const light = {
	...buttonLight,
	...inlineErrorLight,
	...linkLight,
	...radioLight,
	...textInputLight,
}

export const brand = {
	...buttonBrand,
	...inlineErrorBrand,
	...linkBrand,
	...radioBrand,
}

export const brandYellow = {
	...buttonBrandYellow,
	...linkBrandYellow,
}

export const mono = {
	...linkMono,
}
