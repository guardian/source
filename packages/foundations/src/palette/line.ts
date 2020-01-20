import { neutral, brand } from "./global"

const brandDefault = {
	primary: brand[600],
}
const brandAlt = {
	primary: neutral[7],
}
export const line = {
	primary: neutral[86],
	brandDefault,
	brandAlt,
	// continue to expose legacy theme names
	brand: brandDefault,
	brandYellow: brandAlt,
}
