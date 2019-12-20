export * from "./button"
export * from "./inline-error"
export * from "./radio"
export * from "./text-input"

import {
	buttonLight,
	buttonBrand,
	buttonBrandYellow,
	buttonReaderRevenue,
	buttonReaderRevenueYellow,
} from "./button"
import { inlineErrorLight, inlineErrorBrand } from "./inline-error"
import { radioLight, radioBrand } from "./radio"
import { textInputLight } from "./text-input"

export const light = {
	...buttonLight,
	...inlineErrorLight,
	...radioLight,
	...textInputLight,
}

export const brand = {
	...buttonBrand,
	...inlineErrorBrand,
	...radioBrand,
}

export const brandYellow = {
	...buttonBrandYellow,
}

export const readerRevenue = {
	...buttonReaderRevenue,
}

export const readerRevenueYellow = {
	...buttonReaderRevenueYellow,
}
