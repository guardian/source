import { neutral, brand } from "./global"

const brandAlt = {
	primary: neutral[7],
}
export const line = {
	primary: neutral[86],
	brand: {
		primary: brand[600],
	},
	brandAlt,
	// continue to expose legacy theme names
	brandYellow: brandAlt,
}
