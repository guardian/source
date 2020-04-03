import React from "react"
import { Props } from "@guardian/src-helpers"
import {
	straightLines,
	squigglyLines,
	dottedLines,
	fourLines,
	eightLines,
} from "./styles"

type LineEffectType = "squiggly" | "dotted" | "straight"

interface LinesProps extends Props {
	effect?: LineEffectType
	count?: 4 | 8
}

export const Lines = ({ effect = "straight", count = 4 }: LinesProps) => {
	if (effect === "squiggly") {
		return <div css={squigglyLines} />
	}
	if (effect === "dotted") {
		return <div css={dottedLines} />
	}
	return <div css={[straightLines, count === 4 ? fourLines : eightLines]} />
}
