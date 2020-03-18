import { SerializedStyles } from "@emotion/core"

export type ThemeName = "default" | "brand" | "brandAlt"

export interface Props {
	className?: string
	cssOverrides?: SerializedStyles | SerializedStyles[]
}
