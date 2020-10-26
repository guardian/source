import React, { HTMLAttributes, ReactNode } from "react"
import { SerializedStyles } from "@emotion/core"
import { Props } from "@guardian/src-helpers"
import {tileGridColumns, tilesGridContainer} from "./styles";

type Columns = 2 | 3 | 4 | 5
type StackSpace = 1 | 2 | 3 | 4 | 5 | 6 | 9 | 12 | 24

interface TilesProps extends HTMLAttributes<HTMLDivElement>, Props {
	columns: Columns
	space?: StackSpace
	cssOverrides?: SerializedStyles | SerializedStyles[]
	children: ReactNode
}

const Tiles = ({ cssOverrides, children, columns, space, ...props }: TilesProps) => {
	return (
		<div
			css={[tilesGridContainer, tileGridColumns[columns]]}
			{...props}
		>
			{children}
		</div>
	)
}

const defaultProps = {}

Tiles.defaultProps = { ...defaultProps }

export { Tiles }
