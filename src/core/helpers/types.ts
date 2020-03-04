import { SerializedStyles } from "@emotion/core"

export type ThemeName =
	| "default"
	| "light"
	| "brand"
	| "brandYellow"
	| "brandAlt"

export interface Props {
	className?: string
	cssOverrides?: SerializedStyles | SerializedStyles[]
}
