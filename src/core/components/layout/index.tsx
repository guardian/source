import React, { HTMLAttributes, ReactNode } from "react"
import { SerializedStyles } from "@emotion/core"
import {
	stack,
	stackSpace1,
	stackSpace2,
	stackSpace3,
	stackSpace4,
	stackSpace5,
	stackSpace6,
	stackSpace9,
	stackSpace12,
	stackSpace24,
} from "./styles"
import { Props } from "@guardian/src-helpers"

interface StackProps extends HTMLAttributes<HTMLDivElement>, Props {
	space?: 1 | 2 | 3 | 4 | 5 | 6 | 9 | 12 | 24
	cssOverrides?: SerializedStyles | SerializedStyles[]
	children: ReactNode
}

const stackSpaceMap = {
	1: stackSpace1,
	2: stackSpace2,
	3: stackSpace3,
	4: stackSpace4,
	5: stackSpace5,
	6: stackSpace6,
	9: stackSpace9,
	12: stackSpace12,
	24: stackSpace24,
}

const Stack = ({ cssOverrides, children, space, ...props }: StackProps) => {
	return (
		<div
			css={[stack, space ? stackSpaceMap[space] : "", cssOverrides]}
			{...props}
		>
			{children}
		</div>
	)
}

const defaultProps = {}

Stack.defaultProps = { ...defaultProps }

export { Stack }
