import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { HTMLAttributes } from 'react';
import type { Props } from '../@types/Props';
import { column, flexGrow, setSpan, setWidth } from './styles';

export interface ColumnProps extends HTMLAttributes<HTMLDivElement>, Props {
	/**
	 * Fraction of the parent container's width that the column will occupy.
	 *
	 * Pass 0 to hide the column completely.
	 *
	 * Pass an array of fractions to set the width that the column occupies at
	 * different breakpoints. The first value in the array will reflect the
	 * width at `mobile`, the second value at `tablet`, then `desktop`,
	 * `leftCol` and `wide`.
	 *
	 * If no value is provided, the column width will be fluid (i.e. take up
	 * remaining space, divided between all fluid columns).
	 */
	width?: number | number[];
	/**
	 * Number of [grid
	 * columns](https://theguardian.design/2a1e5182b/p/41be19-grids) that the
	 * column will occupy.
	 *
	 * Pass 0 to hide the column completely.
	 *
	 * Pass an array of numbers to set the number of grid columns the column
	 * component occupies at different breakpoints. The first value in the array
	 * will reflect the width at `mobile`, the second value at `tablet`, then
	 * `desktop`, `leftCol` and `wide`.
	 *
	 * If neither `width` nor `span` is passed, the column width will be fluid
	 * (i.e. take up remaining space, divided between all fluid columns).
	 *
	 * If both `width` and `span` are passed, `width` takes priority.
	 */
	span?: number | number[];
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-columns) •
 * [Design System](https://theguardian.design/2a1e5182b/p/41cd49-columns) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/columns/Column.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 */
export const Column = ({
	width,
	span,
	cssOverrides,
	children,
	...props
}: ColumnProps): EmotionJSX.Element => {
	const columnCss = [column];
	if (width) {
		columnCss.push(setWidth(width));
	} else if (span) {
		columnCss.push(setSpan(span));
	} else {
		columnCss.push(flexGrow);
	}

	return (
		<div css={[columnCss, cssOverrides]} {...props}>
			{children}
		</div>
	);
};
