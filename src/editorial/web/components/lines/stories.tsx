import React from "react"
import { Lines } from "./index"

export default {
	title: "Lines",
	component: Lines,
}

export const fourStraightLines = () => <Lines />
fourStraightLines.story = { name: "four straight lines" }

export const eightStraightLines = () => <Lines count={8} />
eightStraightLines.story = { name: "eight straight lines" }

export const dottedLines = () => <Lines effect="dotted" />
dottedLines.story = { name: "dotted lines" }

export const squigglyLines = () => <Lines effect="squiggly" />
squigglyLines.story = { name: "squiggly lines" }
